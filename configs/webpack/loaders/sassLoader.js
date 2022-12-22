const { isDev } = require('../buildValues');

module.exports = {
    sassLoader: function () {
        return {
            loader: 'sass-loader',
            options: {
                sourceMap: isDev,
            },
        };
    },
};
