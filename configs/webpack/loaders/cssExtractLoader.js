const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function() {
    return {
        loader: MiniCssExtractPlugin.loader,
    };
};
