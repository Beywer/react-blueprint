const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/**
 * Clean previous build
 *
 * @param verbose - enables log of all removing files
 * @param opts - other plugin options
 * @returns {CleanWebpackPlugin}
 */
module.exports = function(verbose, opts = {}) {
    return new CleanWebpackPlugin({ verbose, ...opts });
};