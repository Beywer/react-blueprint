const cssLoader = require('../loaders/cssLoader');
const postcssLoader = require('../loaders/postcssLoader');

/**
 * Preset for handling library styles.
 *
 * @param injectLoader - loader for delivering styles to page. Example: style-loader for dev and extract-loader for prod.
 * @returns {{loaders: [*, *, *, *], test: RegExp, exclude: RegExp}}
 */
module.exports = function (injectLoader) {
    return {
        test: /\.css$/,
        exclude: /src/,
        include: /node_modules/,
        use: [injectLoader, cssLoader(false, 1), postcssLoader()],
    };
};
