let baseConf = require('./webpack.base.conf');
const path = require('path');

console.log(11111111111111111111111);


baseConf.entry = {
    'main': path.join(__dirname, '../src/app.js')
};


// 文件映射
baseConfig.devtool = 'source-map';



module.exports = baseConf;