const path = require('path');

module.exports = {
    postCssLoader: function () {
        return {
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    config: path.join(process.cwd(), 'configs/postcss/postcss.config.js'),
                },
            },
        };
    },
};
