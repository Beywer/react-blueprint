const { cssExtractLoader } = require('../loaders/cssExtractLoader');
const { babelLoader } = require('../loaders/babelLoader');
const { cssLoader } = require('../loaders/cssLoader');
const { postCssLoader } = require('../loaders/postcssLoader');
const { sassLoader } = require('../loaders/sassLoader');
const { fileLoader } = require('../loaders/fileLoader');

module.exports = {
    /**
     * @param options
     * @param options.cssInjectLoader - inject loader for styles (styleLoader, extractLoader or other)
     * @param options.classNamesFormat - CSS Modules class names transformation description
     * @param options.assetNames - assets name format
     * */
    projectSources: function (options) {
        return [
            {
                test: /\.(ts|tsx)/,
                exclude: /node_modules/,
                use: [babelLoader()],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    options.cssInjectLoader ?? defaultOptions.classNamesFormat,
                    cssLoader(
                        {
                            mode: 'local',
                            localIdentName:
                                options.classNamesFormat ?? defaultOptions.classNamesFormat,
                        },
                        2,
                    ),
                    postCssLoader(),
                    sassLoader(),
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [fileLoader(options.assetNames ?? defaultOptions.assetNames)],
            },
        ];
    },
};

const defaultOptions = {
    cssInjectLoader: cssExtractLoader(),
    classNamesFormat: '[hash]',
    assetNames: '[name].[ext]',
};
