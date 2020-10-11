const fs = require('fs');

const myFunction = ()=> {
    console.log('myFunction invoked');
};

// nextTick：找到它执行之后的第一个同步执行函数，这个同步执行函数调用完之后去执行它
// 或者是找到它后面执行的异步函数，在这个异步函数执行之前来调用它
process.nextTick(myFunction);

// 同步读取
console.log(fs.readFileSync('./app2.js').toString('utf8'));

// 异步读取
fs.readFile('./app2.js', (error, data)=> {
    console.log(data.toString('utf8'));
});