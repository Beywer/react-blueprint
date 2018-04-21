const path = require('path');

module.exports = require('./webpack.base.babel.js')({

  imageNames: '[path][name].[ext]',

  // Process own styles with hmr and don't allow CssModule uglify class names to mush
  cssLoaders: [
    {
      loader: 'style-loader',
      options: {
        hmr: true
      }
    },
    {
      loader: 'css-loader',
      options: {
        modules: true,
        localIdentName: '[path][name]__[local]--[hash:base64:5]',
        importLoaders: 1
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: path.join(process.cwd(), 'configs/postcss/postcss.config.js')
        }
      }
    }
  ],

  plugins: [],

  devtool: 'eval-source-map',
  devServer: {
    port: 3000,
  },
});
