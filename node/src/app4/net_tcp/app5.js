const net = require('net');

const server = net.createServer((socket) => {
    console.log('client connected');

    // 客户端最大连接数
    server.maxConnections = 2;

    server.getConnections((error, count) => {
        console.log('client count:' + count);
    });

    socket.on('data', (data) => {
        console.log(data.toString());
    })
});


server.listen(8888, ()=> {
    console.log('server is listening');
});
