const path = require('path');

// __dirname表示当前文件的绝对路径
const outputPath = path.join(__dirname, 'myDir', 'hello.js');

console.log(outputPath)