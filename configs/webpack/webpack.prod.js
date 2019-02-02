/* eslint-disable */
const cwd = process.cwd();
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = require('./webpack.base')({
    mode: 'production',

    // disable builtin minification due to Terser error
    // seems like it problem starts after 4.26 webpack ver
    // (4.25 - no problem, 4.26 - not tested, but webpack changed minificator, 4.29 - problem)
    optimization: {
        minimize: false,
    },

    // Only hashes for images and classes in production
    imageNames: '[hash].[ext]',
    cssClassNames: '[hash]',


    plugins: [
        // Extract own styles in external css file
        new MiniCssExtractPlugin({
            filename: "[name]_[hash].css",
            chunkFilename: "[id].css"
        }),
        // Minify js
        new UglifyJsPlugin(),
        // Remove previous build
        new CleanWebpackPlugin(['build'], {root: cwd}),
    ],
});
