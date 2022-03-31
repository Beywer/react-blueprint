export async function portionedPerform<T, R>(
    list: T[],
    asyncAction: (item: T) => Promise<R>,
    portionSize: number,
): Promise<R[]> {
    const steps = Math.ceil(list.length / portionSize);
    const results: R[] = [];

    for (let i = 0; i < steps; i++) {
        const from = i * portionSize;
        const to = from + portionSize;
        const portion = list.slice(from, to);

        const pRes = await Promise.all(portion.map(asyncAction));
        results.push(...pRes);
        progress(to, list.length);
    }

    return results;
}

function progress(performed: number, listSize: number): void {
    console.clear();
    const percent = (performed / listSize) * 100;
    console.log(`Performed: ${percent.toFixed(2)}% (${performed}/${listSize})`);
}
