module.exports = {
    fileLoader: function (name) {
        return {
            loader: 'file-loader',
            options: {
                name: name,
                outputPath: 'img',
            },
        };
    },
};
