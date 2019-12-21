const webpack = require('webpack');

/**
 * ContextReplacementPlugin which removes all non imported moment locales
 *
 * Moment contains require('./locale' + name) string. Webpack think that he have to add into
 * the bundle all locales even if they doesn't used. Empty-module prevent webpack from adding
 * unused locales into bundle. All needed locales should be imported by hand.
 *
 * @returns {webpack.ContextReplacementPlugin}
 */
module.exports = function() {
    return new webpack.ContextReplacementPlugin(
        /\.\/locale$/,
        'empty-module',
        false,
        /js$/,
    );
};
