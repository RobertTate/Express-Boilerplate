const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const assetPath = '/client/';
const distPath = `${assetPath}dist`;
const srcPath = `${assetPath}src`;

module.exports = {
    mode: 'production',
    context: path.join(__dirname, srcPath),
    entry: ['babel-polyfill', './js/main.js', './scss/main.scss'],
    output: {
        filename: '[name].min.js',
        path: path.join(__dirname, distPath, '/js')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '../css/[name].min.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.s[c|a]ss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                include: /(js)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/dist/images',
                        outputPath: 'images'
                    }
                }
            },
            {
                test: /\.(pdf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/dist/docs',
                        outputPath: 'docs'
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    }
}