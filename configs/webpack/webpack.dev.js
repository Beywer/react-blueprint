const path = require('path');
const cwd = process.cwd();

const { styleLoader } = require('./loaders/styleLoader');

module.exports = require('./webpack.base')({
    mode: 'development',

    optimization: undefined,

    // Names with path for images and classes in development
    imageNames: '[path][name].[ext]',
    cssClassNames: '[path][name]__[local]--[hash:base64:5]',

    cssInjectLoader: styleLoader(),

    plugins: [],

    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(cwd, 'src'),
        },
        port: 3000,
        // hot: true,
    },
});
