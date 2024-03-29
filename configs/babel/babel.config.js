module.exports = function (api) {
    api.cache(true);

    const presets = [
        require('@babel/preset-env'),
        require('@babel/preset-react'),
        require('@babel/preset-typescript'),
    ];
    const plugins = [];

    return {
        presets,
        plugins,
    };
};
