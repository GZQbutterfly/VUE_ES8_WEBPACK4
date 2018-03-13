// # 仅运行于服务器
import { createApp } from './app'
export default context => {
  const { app } = createApp();
  return app;
}

const createApp = require('/path/to/built-server-bundle.js');
const server = require('express')();
server.get('*', (req, res) => {
  const context = { url: req.url }
  createApp(context).then(app => {
    renderer.renderToString(app, (err, html) => {
      if (err) {
        if (err.code === 404) {
          res.status(404).end('Page not found')
        } else {
          res.status(500).end('Internal Server Error')
        }
      } else {
        res.end(html)
      }
    })
  })
})