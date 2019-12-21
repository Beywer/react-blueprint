const cssLoader = require('../loaders/cssLoader');
const postcssLoader = require('../loaders/postcssLoader');

/**
 * Preset for handling project styles.
 *
 * @param injectLoader - loader for delivering styles to page. Example: style-loader for dev and extract-loader for prod.
 * @param classNamesFormat - CSS-Modules class names format definition
 * @returns {{loaders: [*, *, *, *], test: RegExp, exclude: RegExp}}
 */
module.exports = function(injectLoader, classNamesFormat) {
    return {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [
            injectLoader,
            cssLoader({ mode: 'local', localIdentName: classNamesFormat }, 1),
            postcssLoader(),
        ],
    };
};
