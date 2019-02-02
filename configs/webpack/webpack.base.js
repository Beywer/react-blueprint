const path = require('path');
const cwd = process.cwd();
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (options) {
    return {
        entry: './src/app.tsx',
        output: {
            path: path.resolve(cwd, 'build'),
            filename: 'main_[hash].js',
        },

        module: {
            rules: [
                // Load images
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: options.imageNames,
                                outputPath: 'img',
                            },
                        },
                    ],
                },
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    loaders: [
                        {
                            loader: "babel-loader",
                            options: {
                                configFile: path.join(cwd, 'configs/babel/babel.config.js')
                            }
                        },
                        'ts-loader',
                    ]
                },
                // Load own styles
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: options.cssClassNames,
                                importLoaders: 1
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                config: {
                                    path: path.join(cwd, 'configs/postcss/postcss.config.js')
                                }
                            }
                        }
                    ]
                },
                // Load lib styles
                {
                    test: /\.css$/,
                    exclude: /src/,
                    include: /node_modules/,
                    loaders: ['style-loader', 'css-loader'],
                },
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'src/index.html',
                // minify: true, // seems it doesn't work
            }),

            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                },
            }),

            // // Moment contains require('./locale' + name) string. Webpack think that he have to add into bundle all locales
            // // even if they doesn't used. Empty-module prevent webpack from adding unused locales into bundle.
            // // All needed locales have to be imported by hand.
            // new webpack.ContextReplacementPlugin(/\.\/locale$/, 'empty-module', false, /js$/),
        ].concat(options.plugins || []),

        resolve: {
            modules: [
                'node_modules',
                path.resolve(cwd, 'src')
            ],
            extensions: ['.tsx', '.ts', '.js']
            // alias: {
            //     'module': 'new-module',
            //     // alias 'module' -> 'new-module' and 'module/path/file' -> 'new-module/path/file'
            // },
        },

        target: 'web',
        mode: options.mode,
        devServer: options.devServer,
        devtool: options.devtool,
        optimization: options.optimization,
    }
};
