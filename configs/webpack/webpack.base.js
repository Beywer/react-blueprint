const path = require('path');
const cwd = process.cwd();

const projectCode = require('./presets/projectCode');
const projectAssets = require('./presets/projectAssets');
const projectModulesStyles = require('./presets/projectModulesStyles');
const projectGlobalStyles = require('./presets/projectGlobalStyles');
const libStyles = require('./presets/libStyles');

const htmlWebpackPlugin = require('./plugins/htmlWebpackPlugin');
const definePlugin = require('./plugins/definePlugin');

module.exports = function({ mode, optimization, imageNames, cssClassNames, cssInjectLoader, plugins, ...rest }) {
    return {
        entry: './src/app.tsx',
        output: {
            path: path.resolve(cwd, 'build'),
            filename: 'main_[hash].js',
        },

        module: {
            rules: [
                projectAssets(imageNames),
                projectCode(),
                projectModulesStyles(cssInjectLoader, cssClassNames),
                projectGlobalStyles(cssInjectLoader),
                libStyles(cssInjectLoader),
            ],
        },

        plugins: [
            htmlWebpackPlugin(),
            definePlugin(),
        ].concat(plugins || []),

        resolve: {
            modules: [
                'node_modules',
                path.resolve(cwd, 'src'),
            ],
            extensions: ['.tsx', '.ts', '.js'],
        },

        target: 'web',
        mode: mode,

        stats: {
            // Hides massive "Child mini-css-extract-plugin ..." logs
            children: false,
        },

        ...rest,
    };
};
