// 引入原生模块
const http = require('http');
const querystring = require('querystring');
const url = require('url');

// 引入自定义模块
const userService = require('./UserService');

// 创建服务器
const server = http.createServer(function (request, response) {
   let data = '';
   request.on('data', function (chunk) {
       data += chunk;
   });
   request.on('end', function () {
      const requestUrl = request.url;
      const requestMethod = request.method;

      if (requestUrl.includes("login") && requestMethod === "GET"){
          const requestParams = url.parse(requestUrl);
          console.log(requestParams);

          const queryObject = querystring.parse(requestParams.query);
          console.log(queryObject);

          const loginResult = userService.login(queryObject.username, queryObject.password);
          console.log("login result:" + loginResult);

          response.writeHead(200, {'Content-Type': 'text/plain'});
          response.end("username:" + queryObject.username + "," + queryObject.password);
      }
   });
});

server.listen(3000, function () {
    console.log("server is listening on port 3000")
});