const cssLoader = require('../loaders/cssLoader');
const postcssLoader = require('../loaders/postcssLoader');
const sassLoader = require('../loaders/sassLoader');

/**
 * Preset for handling project styles for global usage.
 *
 * @param injectLoader - loader for delivering styles to page. Example: style-loader for dev and extract-loader for prod.
 * @returns {{loaders: [*, *, *, *], test: RegExp, exclude: RegExp}}
 */
module.exports = function (injectLoader) {
    return {
        test: /\.scss$/,
        include: /global.scss/,
        exclude: /node_modules/,
        use: [injectLoader, cssLoader(false, 2), postcssLoader(), sassLoader()],
    };
};
