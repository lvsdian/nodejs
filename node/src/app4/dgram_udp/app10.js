// 服务器端
const dgram = require('dgram');

const message = Buffer.from('this message comes form server');

const socket = dgram.createSocket('udp4', (msg, info) => {
   socket.send(message, 0, message.length - 1, info.port, info.address,(error, bytes)=> {
      if (error) {
          console.log(error);
          return;
      }
      console.log('server has sent' + bytes + 'bytes message');
   });
});

socket.bind(9999, 'localhost', ()=> {
    console.log('server has binded to 9999');
});

socket.on('message', (msg, info) => {
    console.log('message event occurred');
    console.log(msg.toString());
});