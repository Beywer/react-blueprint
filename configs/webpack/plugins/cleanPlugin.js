const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    /**
     * Clean previous build
     *
     * @param verbose - enables log of all removing files
     * @param opts - other plugin options
     * @returns {CleanWebpackPlugin}
     */
    cleanWebpackPlugin: function (verbose, opts = {}) {
        return new CleanWebpackPlugin({ verbose, ...opts });
    },
};
