// 服务器端
const http = require('http');
// websocket
const io = require('socket.io');
const fs = require('fs');

const server = http.createServer((request, response) => {
   response.writeHead(200, {'Content-Type': 'text/html'});
   if (request.url === '/') {
       fs.readFile('../client.html', 'utf8', (error, data)=> {
          if (error) {
              console.log('error occurred');
          } else {
              response.end(data.toString());
          }
       });
   } else {
       response.end('<html lang="EN_US"><body>ERROR</body></html>')
   }
});

server.listen(3000, 'localhost');

// websocket是基于http的，
// 所以将server封装成socket里面的socket对象
const socket = io.listen(server);

socket.on('connection', (socket)=> {
    console.log('connection has been established');
    socket.on('message', (message)=> {
        console.log('message:' + message);
    });
    socket.on('disconnect', ()=>{
        console.log('connection has lost');
    });

    // 服务器端发送"hello client"，客户端每次刷新，都会先断开连接，再建立连接
    socket.send("hello client");

    // 发射"serverEvent"，并且接收"clientEvent"
    socket.emit('serverEvent', 'this is serverEvent');
    socket.on('clientEvent', (data)=> {
        console.log(data.address + "," + data.age);
    });

    // 监听"broadcastClientEvent"事件，打印消息，并发射"broadcastServerEvent"事件
    socket.on('broadcastClientEvent', (message)=>{
        console.log(message);
        // 如果没用"broadcast"就是向刚刚发数据的那个client发射"broadcastServerEvent"事件，
        // 用了"broadcast"就是广播，即面向所有的客户端
        socket.broadcast.emit('broadcastServerEvent', 'you are good');
    });
});