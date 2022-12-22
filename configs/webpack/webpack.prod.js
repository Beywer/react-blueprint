const { cssExtractLoader } = require('./loaders/cssExtractLoader');
const { cssExtractPlugin } = require('./plugins/cssExtractPlugin');
const { cleanWebpackPlugin } = require('./plugins/cleanPlugin');

module.exports = require('./webpack.base')({
    mode: 'production',

    optimization: {
        minimize: true,
    },

    // Only hashes for images and classes in production
    imageNames: '[hash].[ext]',
    cssClassNames: '[hash]',

    cssInjectLoader: cssExtractLoader(),

    plugins: [cssExtractPlugin(), cleanWebpackPlugin(true)],
});
