/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (options) {
  return {
    entry: path.join(process.cwd(), 'src/app.js'),

    output: {
      path: path.resolve(process.cwd(), 'build'),
      filename: 'main[hash].js',
      publicPath: '',
    },

    module: {
      rules: [
        // Load images
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: options.imageNames,
                outputPath: 'img'
              }
            }
          ]
        },
        // Transpile onw js and jsx files
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                extends: path.resolve(process.cwd(), 'configs/babel/.babelrc')
              }
            }
          ]
        },
        // Load own styles
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: options.cssLoaders
        },
        // Load lib styles
        {
          test: /\.css$/,
          exclude: /src/,
          include: /node_modules/,
          loaders: ['style-loader', 'css-loader'],
        },
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html',
        minify: true,
      }),

      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        },
      }),
    ].concat(options.plugins),

    resolve: {
      modules: [
        'node_modules',
        path.resolve(process.cwd(), 'src')
      ],

      extensions: ['.js', '.jsx', '.json'],

      alias: {},
    },

    devtool: options.devtool,
    devServer: options.devServer,
  };
};
