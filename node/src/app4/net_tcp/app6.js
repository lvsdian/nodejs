const net = require('net');

const server = net.createServer((socket)=>{
    const address = socket.address();
    const message = 'server address is : ' + JSON.stringify(address);
    // 服务器向客户端发送数据
    socket.write(message, () =>{
        const writeSize = socket.bytesWritten;
        console.log(message);
        console.log("message size is : " + writeSize);
    });

    // 读取客户端传过来的数据
    socket.on('data', (data) => {
        console.log(data.toString());

        const readSize = socket.bytesRead;

        console.log('data size is :' + readSize);
    })
});

server.listen(8888, () => {
   console.log("server is listening");
});