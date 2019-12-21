module.exports = function(modules, importLoaders) {
    return {
        loader: 'css-loader',
        options: { modules, importLoaders },
    };
};
