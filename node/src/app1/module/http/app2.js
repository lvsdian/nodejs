// 服务端
const http = require('http');
const httpServer = new http.Server();

const server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello Node');
});

httpServer.listen(2000, function () {
    console.log("node server started on port");
});