const cssLoader = require('../loaders/cssLoader');
const postcssLoader = require('../loaders/postcssLoader');
const sassLoader = require('../loaders/sassLoader');

/**
 * Preset for handling project styles with css-modules enabled.
 *
 * @param injectLoader - loader for delivering styles to page. Example: style-loader for dev and extract-loader for prod.
 * @param classNamesFormat - CSS-Modules class names format definition
 * @returns {{loaders: [*, *, *, *], test: RegExp, exclude: RegExp}}
 */
module.exports = function(injectLoader, classNamesFormat) {
    return {
        test: /\.scss$/,
        exclude: /node_modules|global.scss/,
        loaders: [
            injectLoader,
            cssLoader({ mode: 'local', localIdentName: classNamesFormat }, 2),
            postcssLoader(),
            sassLoader(),
        ],
    };
};
