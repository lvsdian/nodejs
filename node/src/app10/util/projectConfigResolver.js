const path = require('path');
const jsonfile = require('jsonfile');

// 解析projectConfig.json文件
module.exports = jsonfile.readFileSync(path.join(__dirname, '../projectConfig.json'));
