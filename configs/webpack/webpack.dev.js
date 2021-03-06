/* eslint-disable */
const path = require('path');
const cwd = process.cwd();

const stylesLoader = require('./loaders/styleLoader');

module.exports = require('./webpack.base')({
    mode: 'development',

    optimization: undefined,

    // Names with path for images and classes in development
    imageNames: '[path][name].[ext]',
    cssClassNames: '[path][name]__[local]--[hash:base64:5]',

    cssInjectLoader: stylesLoader(),

    plugins: [],

    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(cwd, 'src'),
        port: 3000,
        // hot: true,
    },
});
