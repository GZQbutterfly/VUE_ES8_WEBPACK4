const Vue = require('vue');
const path = require('path');
const server = require('express')();
const createRenderer = require('vue-server-renderer').createRenderer;
const renderer = createRenderer({
    template: require('fs').readFileSync(path.join(__dirname, '../client/index.tmpl.html'), 'utf-8')
});
server.get('*', (req, res) => {
    const app = new Vue({
        data: {
            url: req.url
        },
        template: `<div>访问的 URL 是： {{ url }}</div>`
    });
    res.writeHead(200, {
        "Content-Type": "charset=utf-8"
    });
    renderer.renderToString(app, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error')
            return
        }
        res.end(html);
    });
})
server.listen(8080, ()=>{
    console.log('http://localhost:8080');
});

