/* eslint-disable */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = require('./webpack.base')({
    mode: 'production',

    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
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
        // Remove previous build
        // For some reason 'cleanOnceBeforeBuildPatterns' does nothing
        new CleanWebpackPlugin({cleanAfterEveryBuildPatterns: ['./build'], verbose: true}),
    ],
});
