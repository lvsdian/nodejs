// 客户端
const dgram = require('dgram');

const message = Buffer.from("this message comes from client");

const socket = dgram.createSocket('udp4');

socket.send(message, 0, message.length - 1, 9999, 'localhost', (error, bytes) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log('client has sent '+ bytes + 'byte message ');
});

socket.on('message', (msg, info) => {
    const message2send = 'hello';
    socket.send(message2send, 0, message2send.length, 9999, 'localhost');
});