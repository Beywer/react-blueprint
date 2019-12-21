const fileLoader = require('../loaders/fileLoader');

module.exports = function(assetNames) {
    return {
        test: /\.(png|jpg|gif|svg)$/,
        use: [fileLoader(assetNames)],
    };
};
