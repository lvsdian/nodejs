const path = require('path');

const extInfo = path.extname(path.join(__dirname, 'myDir', 'hello.js'));

// 直接获取扩展名js
console.log(extInfo);