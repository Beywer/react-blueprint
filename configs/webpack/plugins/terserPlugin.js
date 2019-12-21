const TerserPlugin = require('terser-webpack-plugin');

module.exports = function() {
    return new TerserPlugin();
};