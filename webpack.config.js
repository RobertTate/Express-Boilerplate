const path = require('path');

const CLIENT_DEST = path.join(__dirname, './client/dist');

module.exports = {
    entry: ['babel-polyfill', './client/js/main.js'],
    output: { path: CLIENT_DEST, filename: 'bundle.js' },
    module: {
        rules: [
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
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    "babel-loader",
                    {
                        loader: "react-svg-loader"
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}