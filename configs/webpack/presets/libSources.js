const { cssExtractLoader } = require('../loaders/cssExtractLoader');
const { cssLoader } = require('../loaders/cssLoader');
const { postCssLoader } = require('../loaders/postcssLoader');

module.exports = {
    /**
     * @param options
     * @param options.cssInjectLoader - inject loader for styles (styleLoader, extractLoader or other)
     * */
    libSources: function (options) {
        return [
            {
                test: /\.css$/,
                exclude: /src/,
                include: /node_modules/,
                use: [
                    options.cssInjectLoader ?? defaultOptions.cssInjectLoader,
                    cssLoader(false, 1),
                    postCssLoader(),
                ],
            },
        ];
    },
};

const defaultOptions = {
    cssInjectLoader: cssExtractLoader(),
};
