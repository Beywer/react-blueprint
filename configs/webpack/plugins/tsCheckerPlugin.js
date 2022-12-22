const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { isDev } = require('../buildValues');

module.exports = {
    tsCheckerPlugin: function () {
        return new ForkTsCheckerWebpackPlugin({
            async: isDev,
            devServer: isDev,
        });
    },
};
