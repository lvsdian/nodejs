const net = require('net');

const server = net.createServer((socket => {
    console.log('client connected');
}));

server.listen(8888, () => {
    const address = server.address();
    console.log(address);
});