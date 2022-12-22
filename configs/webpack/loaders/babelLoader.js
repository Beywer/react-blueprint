const path = require('path');
const { projectRoot } = require('../buildValues');

module.exports = {
    babelLoader: function () {
        return {
            loader: 'babel-loader',
            options: {
                configFile: path.join(projectRoot, 'configs/babel/babel.config.js'),
            },
        };
    },
};
