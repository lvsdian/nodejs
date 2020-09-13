// 作为客户端
const http = require('http');
let responseData = '';

// 专门针对get的请求
http.get({
    'host': 'localhost',
    'port': '2000',
}, function (response) {
    response.on('data', function (chunk) {
        responseData += chunk;
    });
    response.on('end', function () {
        console.log(responseData);
    })
}).end();