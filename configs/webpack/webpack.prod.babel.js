/* eslint-disable */
// const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = require('./webpack.base.babel.js')({
  // // Only hashes for images in production
  // imageNames: '[hash].[ext]',

  // // Extract own styles in external css file
  // cssLoaders: ExtractTextPlugin.extract({
  //   fallback: 'style-loader',
  //   use: [
  //     {
  //       loader: 'css-loader',
  //       options: {
  //         modules: true,
  //         localIdentName: '[hash]',
  //         importLoaders: 1,
  //       },
  //     },
  //     {
  //       loader: 'postcss-loader',
  //       options: {
  //         config: {
  //           path: path.join(process.cwd(), 'configs/postcss/postcss.config.js'),
  //         },
  //       },
  //     },
  //   ],
  // }),

  plugins: [
    // new ExtractTextPlugin('main_[hash].css'),
    // // Minify js
    // new UglifyJsPlugin(),
    // // Remove previous build
    new CleanWebpackPlugin(['build'], {
      root: process.cwd(),
    }),
  ],
});
