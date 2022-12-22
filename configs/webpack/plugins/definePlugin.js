const webpack = require('webpack');
const { NODE_ENV } = require('../buildValues');

module.exports = {
    definePlugin: function (globals = {}) {
        return new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(NODE_ENV),
            },
            ...globals,
        });
    },
};
