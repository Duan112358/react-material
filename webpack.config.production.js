var webpack = require('webpack');
var config = require('./config.json');

module.exports = {
    entry: {
        app: './js/app',
        vendor: ['react/addons', 'jquery', 'bootstrap', 'node-waves', 'textarea-autosize']
    },
    output: {
        path: 'build' + config.static + '/js/',
        filename: 'app.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css'
        }, 
        {
            test: /\.jsx$/,
            loaders: ['react-hot', 'jsx?harmony'],
            exclude: /node_modules/
        },
        {
            test: /\.less$/,
            loader: 'style!css!less'
        },
        {
            test: /\.(png|jpg|svg)$/,
            loader: 'url?limit=102400'
        },
        { test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=5000&mimetype=application/font-woff" },
        { test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
        { test: /\.eot$/,    loader: "file-loader?prefix=font/" },
        { test: /\.svg$/,    loader: "file-loader?prefix=font/" },
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                "NODE_ENV": JSON.stringify('production')
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.less', '.css']
    }
};
