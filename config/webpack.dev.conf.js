let baseConf = require('./webpack.base.conf');
const path = require('path');




baseConf.entry = {
    'main': path.join(__dirname, '../src/page/web/index.js')
};


// 文件映射
baseConfig.devtool = '#cheap-module-source-map';
















module.exports = baseConf;