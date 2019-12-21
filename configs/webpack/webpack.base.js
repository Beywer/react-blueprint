const path = require('path');
const cwd = process.cwd();

const projectCode = require('./presets/projectCode');
const projectAssets = require('./presets/projectAssets');
const projectModulesStyles = require('./presets/projectModulesStyles');
const projectGlobalStyles = require('./presets/projectGlobalStyles');
const libStyles = require('./presets/libStyles');

const htmlWebpackPlugin = require('./plugins/htmlWebpackPlugin');
const definePlugin = require('./plugins/definePlugin');

module.exports = function(options) {
    return {
        entry: './src/app.tsx',
        output: {
            path: path.resolve(cwd, 'build'),
            filename: 'main_[hash].js',
        },

        module: {
            rules: [
                projectAssets(options.imageNames),
                projectCode(),
                projectModulesStyles(options.cssInjectLoader, options.cssClassNames),
                projectGlobalStyles(options.cssInjectLoader),
                libStyles(options.cssInjectLoader),
            ],
        },

        plugins: [
            htmlWebpackPlugin(),
            definePlugin(),
        ].concat(options.plugins || []),

        resolve: {
            modules: [
                'node_modules',
                path.resolve(cwd, 'src'),
            ],
            extensions: ['.tsx', '.ts', '.js'],
        },

        target: 'web',
        mode: options.mode,
        devServer: options.devServer,
        devtool: options.devtool,
        optimization: options.optimization,
    };
};
