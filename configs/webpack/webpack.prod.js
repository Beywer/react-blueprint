/* eslint-disable */

const cssExtractLoader = require('./loaders/cssExtractLoader');

const terserPlugin = require('./plugins/terserPlugin');
const cssExtractPlugin = require('./plugins/cssExtractPlugin');
const cleanWebpackPlugin = require('./plugins/cleanWebpackPlugin');

module.exports = require('./webpack.base')({
    mode: 'production',

    optimization: {
        minimize: true,
        minimizer: [terserPlugin()],
    },

    // Only hashes for images and classes in production
    imageNames: '[hash].[ext]',
    cssClassNames: '[hash]',

    cssInjectLoader: cssExtractLoader(),

    plugins: [cssExtractPlugin(), cleanWebpackPlugin(true)],
});
