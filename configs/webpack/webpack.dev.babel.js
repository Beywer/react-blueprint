module.exports = require('./webpack.base.babel.js')({

  fileNames: '[path][name].[ext]',
  plugins: [],

  devtool: 'eval-source-map',
  devServer: {
    port: 3000,
  },
});
