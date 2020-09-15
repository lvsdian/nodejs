// 作为客户端
const http = require('http');
let responseData = '';

http.request({
    'host': 'localhost',
    'port': '3000',
    'method': 'get',
    'path': '/login?username=111&password=222'
}, function (response) {
    response.on('data', function (chunk) {
        responseData += chunk;
    });
    response.on('end', function () {
        console.log(responseData);
    })
}).end();