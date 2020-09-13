// 服务端
const http = require('http');

const server = http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello Node');
});

server.listen(2000, 'localhost');

// 服务器正常启动并且处于监听模式下就会触发
server.on('listening', function () {
	console.log("server is listening");
	// 执行server.close()后服务器会退出，那么退出的回调就会执行
	//server.close();
});

// 与客户端建立连接后这个回调就会被触发
server.on('connection', function () {
	console.log('client is connected');
});

server.on('close', function () {
	console.log('server is closed');
});

console.log('node server started on port 2000');