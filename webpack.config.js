var webpack = require('webpack');
var config = require('./config.json');

module.exports = {
    entry: {
        app: './js/app',
        vendor: ['react']
    },
    output: {
        path: 'build' + config.static + '/js/',
        filename: 'app.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.js$/,
            loaders: ['react-hot', 'jsx?harmony'],
            exclude: /node_modules/
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.(png|jpg|svg)$/,
            loader: 'url?limit=102400'
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
    ],
    resolve: {
        extensions: ['', '.jsx', '.js', '.less', '.css']
    }
};
