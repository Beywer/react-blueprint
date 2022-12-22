const path = require('path');

const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === 'development';
const isProd = NODE_ENV === 'production';

const projectRoot = path.resolve(__dirname, '../..');

module.exports = {
    NODE_ENV,
    isProd,
    isDev,
    projectRoot,
};
