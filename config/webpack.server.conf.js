

var path = require('path');
var webpack = require('webpack');



module.exports = {
    target: 'node',
    devtool: false,
    entry: path.join(__dirname, '../src/entry-server.js'),
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'build-server.js',
        publicPath: '../',
        libraryTarget: 'commonjs2'
    },
    module: {
        noParse: /es6-promise\.js$/, // avoid webpack shimming process
        rules: [{
            test: /\.vue$/,
            exclude: /node_modules/,
            use: [{ loader: 'vue-loader' }]
        }, {
            test: /\.js$/,
            exclude: /node_modules|vue\/dist/,
            loader: 'babel-loader?cacheDirectory'
        },
        {
            test: /\.(html|htm)$/,
            use: 'raw-loader',              
            exclude: /node_modules/
        },
        {
            test: /\.(scss|css)$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            exclude: /node_modules/
        },
        {
            test: /\.(png|jpg|gif)$/,
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
        },
        {
            test: /\.(svg|ttf|eot|svg|woff(\(?2\)?)?)(\?[a-zA-Z_0-9.=&]*)?(#[a-zA-Z_0-9.=&]*)?$/,
            loader: "file-loader"
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    resolve: {
        extensions: ['.js', '.vue', '.css', '.less'],
        alias: {
            'create-api': './api_server.js'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
                VUE_ENV: JSON.stringify('server')
            }
        })
    ]
};
