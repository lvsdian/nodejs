const net = require('net');

// cmd --> telnet localhost 8888
const server = net.createServer((socket => {
    console.log('client connected');
    console.log(socket);
}));

server.listen(8888, () => {
    console.log('server is listening');
});