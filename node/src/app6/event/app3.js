const http = require('http');
const events = require('events');
const httpServer = http.createServer();

httpServer.listen(3000, ()=>{
    console.log('listening to port 3000');
});


// 必须先监听事件，在发射事件，再能正确执行
httpServer.on('serverEvent', (param1, param2, param3) => {
    console.log(param1 + ", " + param2 + "," + param3);
});
// 自定义事件
httpServer.emit('serverEvent', 'hello', 'world');
