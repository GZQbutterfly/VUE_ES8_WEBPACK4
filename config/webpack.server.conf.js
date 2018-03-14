let baseConfig = require('./webpack.base.conf');

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin');



baseConfig.entry = {
    'build-server': path.join(__dirname, '../src/entry-server.js')
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
);

module.exports = baseConfig;