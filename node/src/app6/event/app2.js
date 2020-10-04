const http = require('http');
const events = require('events');
const httpServer = http.createServer();

const listener1 = (request, response) => {
    if (request.url === '/') {
        console.log('my listener1');
        response.end('end1');
    }
};

const listener2 = (request, response) => {
    if (request.url === '/') {
        console.log('my listener2');
        response.end('end2');
    }
};


const listener3 = (request, response) => {
    if (request.url === '/') {
        console.log('my listener3');
        response.end('end3');
    }
};

// 默认最大监听器是10个
console.log('default max listener count:' + events.EventEmitter.defaultMaxListeners);
// 指定为2个
httpServer.setMaxListeners(2);
// 添加3个监听器，就会报错
httpServer.on('request', listener1);
httpServer.on('request', listener2);
httpServer.on('request', listener3);

httpServer.listen(3000, ()=>{
    console.log('listening to port 3000');
});