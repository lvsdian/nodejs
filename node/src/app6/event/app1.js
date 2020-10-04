const http = require('http');

const httpServer = http.createServer();

// "addListener"与"on"都是用来监听"request"事件，这里先调用"addListener"，后调用"on"，
// 所以"response"是使用的"addListener"中的"response"，但"addListener"与"on"两个监听器都会
// 被执行，即控制台都会打印"addListener"、"on"
httpServer.addListener('request', (request, response)=>{
    if (request.url === '/') {
        console.log('addListener');
        response.end('end1');
    }
});

httpServer.on('request', (request, response)=>{
    if (request.url === '/') {
        console.log('on');
        response.end('end2');
    }
});

const listener = (request, response) => {
    if (request.url === '/') {
        console.log('my listener');
        response.end('end');
    }
};
// 将监听器单独拎出来，然后添加到"request"事件上
httpServer.on('request', listener);
// 通过"removeListener"或者"off"也可以下线listener
httpServer.removeListener('request', listener);
httpServer.off('request', listener);

httpServer.listen(3000, ()=>{
   console.log('listening to port 3000');
});