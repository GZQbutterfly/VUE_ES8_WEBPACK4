process.env.NODE_ENV = 'development';

var webpack = require('webpack');
webpack.mode = 'development';
var WebpackDevServer = require('webpack-dev-server');
var config = require('./config/webpack.dev.conf.js');


//启动服务
var server = new WebpackDevServer(webpack(config), {
    contentBase: '../dist',
    publicPath: '/',
    hot: true,
    historyApiFallback: true,
    compress: true,
    quiet: false,
    noInfo: false,
    stats: {
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
    },
    proxy: {
        // '/api/*': {
        //     target: 'https://cnodejs.org/',
        //     secure: false
        // }
    },
    disableHostCheck: false
});

console.log(server);

server.app.use('*', (req, res) => {
    res.writeHead(200, {"Content-Type": "charset=utf-8"});

    console.log('23131');
    serverFile(req, res, readFile, context, renderer);
    // let url = req.url;
    // if (/\.js/.test(url)) {
    //     res.end(readFile(url.split('?')[0]));
    // } else {
    //     context(req).then((app) => {
    //         renderer.renderToString(app, (err, html) => {
    //             // console.log(html);
    //             if (err) {
    //                 console.log(err);
    //                 res.status(500).end('Internal Server Error')
    //                 return
    //             }
    //             res.end(html);
    //         });
    //     });
    // }
});

server.listen(8080, '127.0.0.1', () => {
    console.log('http://localhost:8080');
});