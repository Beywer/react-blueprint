const path = require('path');
const cwd = process.cwd();

const { htmlWebpackPlugin } = require('./plugins/htmlPlugin');
const { definePlugin } = require('./plugins/definePlugin');
const { tsCheckerPlugin } = require('./plugins/tsCheckerPlugin');

const { projectSources } = require('./presets/projectSources');
const { libSources } = require('./presets/libSources');

module.exports = function ({ mode, imageNames, cssClassNames, cssInjectLoader, plugins, ...rest }) {
    return {
        entry: './src/app.tsx',
        output: {
            path: path.resolve(cwd, 'build'),
            filename: 'main_[fullhash].js',
        },

        module: {
            rules: [
                ...projectSources({
                    cssInjectLoader,
                    classNamesFormat: cssClassNames,
                    assetNames: imageNames,
                }),
                ...libSources({ cssInjectLoader }),
            ],
        },

        plugins: [htmlWebpackPlugin(), definePlugin(), tsCheckerPlugin()].concat(plugins || []),

        resolve: {
            modules: ['node_modules', path.resolve(cwd, 'src')],
            extensions: ['.tsx', '.ts', '.js'],
        },

        target: 'web',
        mode: mode,

        ...rest,
    };
};
