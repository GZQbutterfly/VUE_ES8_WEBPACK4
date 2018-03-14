const webpack = require('webpack');
const path = require('path');

const  ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
        chunkFilename: '[name].js?[hash:20]',
        publicPath: '../'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
            }, 
            {
                test: /\.(js)$/,
                use: 'babel-loader?cacheDirectory',
                include: [path.join(__dirname, '../src')]
            }, 
            {
                test: /\.(html|htm)$/,
                use: 'raw-loader',              
                exclude: /node_modules/
            },
            {
                test: /\.(scss|css)$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'postcss-loader', 'sass-loader'],
                    fallback: 'style-loader'
                }),
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|gif|eot|woff)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            publicPath: '/',
                            limit: 10000,
                            name: 'static/images/build/[name].[ext]?[hash]'
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx',  '.vue'],
        alias: {
            // 'vue$': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js'),
        }
    },
    plugins:[]
};