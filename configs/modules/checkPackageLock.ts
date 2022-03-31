// tslint:disable:no-console
import fetch from 'node-fetch';
import fse from 'fs-extra';
import path from 'path';
import { portionedPerform } from './portionedPerform';

const DATE_THRESHOLD = new Date('2022-02-22T00:00:00Z');
const CACHE_FOLDER = path.join(__dirname, 'modulesMetaCache');

const whiteList: { name: string; versions?: string[] }[] = [
    // { name: 'csstype', versions: ['3.0.11'] },
];

analyze();

async function analyze() {
    const packLock = await fse.readJson(path.join(process.cwd(), 'package-lock.json'));

    const { packages, dependencies } = packLock;

    const packsCheckInfo = Object.keys(packages)
        .filter((p) => Boolean(p))
        .map((p) => getDependencyData(p, packages[p]));
    const depsCheckInfo = Object.keys(dependencies)
        .filter((key) => Boolean(key))
        .map((key) => getDependencyData(key, dependencies[key]));

    const checkInfo = [...packsCheckInfo, ...depsCheckInfo];

    const problems = (
        await portionedPerform(
            checkInfo,
            async (data) => {
                const dates = await fillModuleVersionReleaseDates(data);
                return checkDate({ ...data, dates });
            },
            50,
        )
    ).filter((p) => p !== null) as DependencyProblemInfo[];

    await logProblems(problems);
}

async function logProblems(problems: DependencyProblemInfo[]) {
    if (problems.length === 0) {
        console.log('NO PACKAGE VERSION PROBLEMS');
        return;
    }

    const grouped: Record<string, DependencyProblemInfo> = {};
    problems.forEach((p) => {
        grouped[p.data.name] = p;
    });

    const bestVariants: { name: string; version: string }[] = [];

    console.clear();
    Object.keys(grouped)
        .sort()
        .forEach((k) => {
            const { message, data } = grouped[k];
            const {
                ordered,
                best: {
                    date: [bestVersion, bestDate],
                },
            } = handleDates(data.dates);

            console.log(
                message,
                `${data.name}@${data.version}`,
                'recommended:',
                bestVersion,
                `(${bestDate})`,
            );
            const versions = ordered.slice(0, 15);
            const arr = versions.map(([version, d]) => ({
                version,
                date: d,
                isBest: version === bestVersion ? '✓' : ' ',
            }));
            console.table(arr);

            if (bestVersion) {
                bestVariants.push({ name: data.name, version: bestVersion });
            }
        });

    if (bestVariants.length === 0) {
        return;
    }

    const packJson = await fse.readJson(path.join(process.cwd(), 'package.json'));
    let changed = false;

    if (!('overrides' in packJson)) {
        packJson.overrides = {};
    }
    bestVariants.forEach(({ name, version }) => {
        if (packJson.dependencies[name]) {
            packJson.dependencies[name] = version;
            return;
        }
        if (packJson.devDependencies[name]) {
            packJson.devDependencies[name] = version;
            return;
        }

        if (packJson.overrides[name]) {
            return;
        }
        packJson.overrides[name] = version;
        changed = true;
    });
    if (changed) {
        await fse.writeJson(path.join(process.cwd(), 'package.json'), packJson);
    }
}

function handleDates(dates: Record<string, string>): {
    ordered: [string, string][];
    best: { date: [string, string]; idx: number };
} {
    const filteredVersions = Object.keys(dates).filter((ver) => {
        const check = /[a-z]/i.test(ver);
        return !check;
    });

    const goodDates: Record<string, string> = {};
    filteredVersions.forEach((ver) => {
        goodDates[ver] = dates[ver];
    });

    const orderedDates = Object.entries(goodDates).sort(([ver1, date1], [ver2, date2]) => {
        const d1 = new Date(date1);
        const d2 = new Date(date2);
        return d1 < d2 ? 1 : d2 < d1 ? -1 : ver1 < ver2 ? 1 : -1;
    });

    let bestVersionDate: [string, string];
    let bestVersionIdx: number;
    for (const gd of orderedDates) {
        if (bestVersionDate) {
            continue;
        }

        const [ver, date] = gd;
        if (new Date(date) < DATE_THRESHOLD) {
            bestVersionDate = [ver, date];
            bestVersionIdx = orderedDates.indexOf(gd);
        }
    }

    return { ordered: orderedDates, best: { date: bestVersionDate, idx: bestVersionIdx } };
}

// function getBestVersion() {}

function checkDate(data: DependencyData): DependencyProblemInfo | null {
    const { version, dates, name } = data;

    const wl = whiteList.find((item) => item.name === name);
    if (wl && (!wl.versions || wl.versions.includes(version))) {
        return null;
    }

    if (!dates[version]) {
        return { data, message: 'DATE FOR VERSION NOT FOUND' };
    }

    const installedDate = new Date(dates[version]);
    if (installedDate > DATE_THRESHOLD) {
        return { data, message: 'PROBLEM DEPENDENCY' };
    }

    return null;
}

function getDependencyData(packagePath: string, info: any): DependencyData {
    const segments = packagePath.split('node_modules/');
    const name = segments[segments.length - 1];
    const version = info.version;
    return { name, fullName: packagePath, version, resolved: info.resolved, dates: {} };
}

async function fillModuleVersionReleaseDates(
    data: DependencyData,
): Promise<Record<string, string>> {
    const { name, version, resolved } = data;

    const cachedMeta = await readFromCache(name);
    if (!cachedMeta || !(version in cachedMeta.time)) {
        return await fetchVersionDatesFromResolved(name, resolved);
    }

    return cachedMeta.time as Record<string, string>;
}

async function fetchVersionDatesFromResolved(
    name: string,
    resolved: string,
): Promise<Record<string, string>> {
    const [addr] = resolved.split('/-/');
    return fetch(addr)
        .then((resp) => resp.json())
        .then(async (meta) => {
            await saveToCache(name, meta);
            return meta.time;
        });
}

async function saveToCache(name: string, data: string) {
    await fse.ensureFile(moduleCachePath(name));
    await fse.writeJson(moduleCachePath(name), data);
}

async function readFromCache(name: string): Promise<any> {
    try {
        return await fse.readJson(moduleCachePath(name));
    } catch (err) {
        if (err.code !== 'ENOENT') {
            console.error(err);
        }
        return null;
    }
}

function moduleCachePath(name: string): string {
    return path.join(CACHE_FOLDER, `${name}.json`);
}

interface DependencyProblemInfo {
    message: string;
    data: DependencyData;
}

interface DependencyData {
    name: string;
    fullName: string;
    version: string;
    resolved: string;
    dates: Record<string, string>;
}
