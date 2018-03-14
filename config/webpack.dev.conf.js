let baseConfig = require('./webpack.base.conf');

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin');



baseConfig.entry = {
    'main': path.join(__dirname, '../src/app.js')
};


// 文件映射
baseConfig.devtool = 'source-map';

// 插件
baseConfig.plugins.push(
    new HtmlWebpackPlugin({
        template: path.join(__dirname, '../src/pages/index.tpl.html'),
        // minify: { removeComments: true },
        cache: true,
        hash: true,
        favicon: path.join(__dirname, '../src/pages/favicon.ico'),
        inject: 'body',
    }),
    new ExtractTextPlugin({ filename: '[name].css', disable: false, allChunks: true }),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    // new CleanWebpackPlugin(['../dist'], {
    //     root: __dirname,
    //     verbose: true,
    //     dry: false,
    //     allowExternal: true
    // })
);

module.exports = baseConfig;