/* eslint-disable */
const path = require('path');

module.exports = require('./webpack.base.babel.js')({


  devtool: 'eval-source-map',
  devServer: {
    port: 3000,
  },
});
