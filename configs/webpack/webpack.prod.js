const { cssExtractLoader } = require('./loaders/cssExtractLoader');
const { cssExtractPlugin } = require('./plugins/cssExtractPlugin');
const { cleanWebpackPlugin } = require('./plugins/cleanPlugin');

module.exports = require('./webpack.base')({
    mode: 'production',

    optimization: {
        minimize: true,
    },

    // Only hashes for images and classes in production
    imageNames: '[fullhash].[ext]',
    cssClassNames: '[fullhash]',

    cssInjectLoader: cssExtractLoader(),

    plugins: [cssExtractPlugin(), cleanWebpackPlugin(true)],
});
