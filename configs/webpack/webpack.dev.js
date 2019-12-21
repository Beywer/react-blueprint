/* eslint-disable */
const path = require('path');
const cwd = process.cwd();

module.exports = require('./webpack.base')({
    plugins: [],

    // Names with path for images and classes in development
    imageNames: '[path][name].[ext]',
    cssClassNames: '[path][name]__[local]--[hash:base64:5]',

    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(cwd, 'src'),
        port: 3000,
        // hot: true,
    },
});
