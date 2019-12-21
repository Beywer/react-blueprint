const path = require('path');

module.exports = {
    process(src, absolutePath, config, options) {
        const { rootDir } = config;
        const globalPath = path.relative(rootDir, absolutePath).replace(/\\/g, '/');
        return `module.exports='/${globalPath}'`;
    },
};
