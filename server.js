require('babel-register');

const path = require('path');

const server = require('express')();

const createRenderer = require('vue-server-renderer').createRenderer;

const fs = require('fs');

let readFile = (filename) => {
    return fs.readFileSync(path.join(__dirname, './dist', filename), 'utf-8')
}

const renderer = createRenderer({
    template: readFile('/index.html')
});


const context = require('./dist/build-server');
// const Vue = require('vue');

const serverFile = require('./server.file');


var webpack = require('webpack');
webpack.mode = 'development';
var WebpackDevServer = require('webpack-dev-server');
var config = require('./config/webpack.dev.conf.js');

//启动服务
// var server = new WebpackDevServer(webpack(config), {
//     contentBase: './dist',
//     publicPath: '/',
//     hot: true,
//     noInfo: true,
//     stats: {
//         colors: true
//     },
//     proxy: {
//         '/api/*': {
//             target: 'https://cnodejs.org/',
//             secure: false
//         }
//     },
//     historyApiFallback: true
// });



server.get('*', (req, res) => {
    res.writeHead(200, {"Content-Type": "charset=utf-8"});
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

server.listen(8080, () => {
    console.log('http://localhost:8080');
});

