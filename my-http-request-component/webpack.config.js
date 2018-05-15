var webpack = require('webpack');

module.exports = {
    entry: './index.jsx',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    }
};