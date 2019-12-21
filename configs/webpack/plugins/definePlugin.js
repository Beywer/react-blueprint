const webpack = require('webpack');

module.exports = function definePlugin(globals = {}) {
    return new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        },
        ...globals,
    });
};
