// const常量；let变量
// 获取客户端信息的服务端
const http = require("http");

const server = http.createServer(function (request, response) {
    let data = '';
    request.on('data', function (chunk) {
        data += chunk;
    });

    request.on('end', function () {
        let method = request.method;
        let headers = JSON.stringify(request.headers);
        let httpVersion = request.httpVersion;
        let requestUrl = request.url;

        response.writeHead(200, {'Content-Type': 'text/html'});

        let responseData = method + "," + headers + "," + httpVersion + "," + requestUrl;

        response.end(responseData);
    });
});

server.listen(2000, function () {
    console.log("node server started on port 2000")
});