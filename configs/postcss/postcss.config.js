/* eslint-disable */
const env = process.env.NODE_ENV;

const cssNanoOptions = {
  autoprefixer: false, // CssNano removes prefixes for less size. G -> loGic
  mergeRules: false,
};

module.exports = {
  plugins: {
    cssnano: env === 'production' ? cssNanoOptions : false,
    // Supported browsers defined in browserlist section in package.json file
    autoprefixer: {},
  },
};
