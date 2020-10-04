const net = require('net');
// 创建客户端
const client = new net.Socket();

// 
client.connect(8888, 'localhost', ()=>{
   console.log('connected to the server');
});



