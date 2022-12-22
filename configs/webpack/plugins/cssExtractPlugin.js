const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    cssExtractPlugin: function (filename = 'css/[name]_[hash].css') {
        return new MiniCssExtractPlugin({ filename });
    },
};
