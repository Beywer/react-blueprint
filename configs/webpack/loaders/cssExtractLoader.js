const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    cssExtractLoader: function () {
        return {
            loader: MiniCssExtractPlugin.loader,
        };
    },
};
