/**
 * Created by xuan on 16/4/15.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    module: {
        loaders: [
            {
            test: /\.js$/,
            loaders: ['react-hot', 'babel-loader?presets[]=es2015&presets[]=react'],
            exclude: /node_modules/
            },
            {test: /\.(png|jpg)$/, loader: "url?limit=40000" },
            {test: /\.css$/, loader: 'style!css'},
           ]
    },
    resolve: {
        alias: {

        }
    }
};
