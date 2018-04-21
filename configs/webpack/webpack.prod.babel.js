const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = require('./webpack.base.babel.js')({

  imageNames: '[hash].[ext]',

  css: ExtractTextPlugin.extract(
    {
      fallback: "style-loader",
      use: [
        {
          loader: "css-loader",
          options: {
            modules: true,
            localIdentName: '[hash]',
            importLoaders: 1
          }
        },
        {
          loader: "postcss-loader",
          options: {
            config: {
              path: path.join(process.cwd(), 'configs/postcss/postcss.config.js')
            }
          }
        }
      ]
    }
  ),

  plugins: [
    new ExtractTextPlugin('main[hash].css')
  ]
});
