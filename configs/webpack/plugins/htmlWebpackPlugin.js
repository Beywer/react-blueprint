const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function() {
    return new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html',
        // minify: true, // seems it doesn't work
    });
};
