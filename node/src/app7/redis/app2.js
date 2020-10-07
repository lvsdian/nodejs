const http = require('http');
const querystring = require('querystring');
const url = require('url');
const userController = require('./user/controller/userController');

const  server = http.createServer((request, response)=>{
    let data = '';
    request.on('data', (chunk)=>{
        data += chunk;
    });
    request.on('end', ()=>{
        const requestUrl = request.url;
        const requestMethod = request.method;

        console.log(requestUrl);

        if (requestUrl.includes('login') && requestMethod === 'GET'){
            const requestParam = url.parse(requestUrl);
            const queryObject = querystring.parse(requestParam.query);

            console.log(queryObject);

            userController.userLogin(queryObject.username, queryObject.password);

            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end('username:' + queryObject.username + ',password:' + queryObject.password);
        } else if (requestUrl.includes('logout') && requestMethod === 'GET'){
            const requestParam = url.parse(requestUrl);
            const queryObject = querystring.parse(requestParam.query);

            console.log(queryObject);

            userController.userLogout(queryObject.userSessionId);

            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end('user logout');
        } else {
            if (!requestUrl.includes('favicon.ico')) {
                const requestParam = url.parse(requestUrl);
                const queryObject = querystring.parse(requestParam.query);

                console.log(queryObject);

                userController.userOtherOperation(queryObject.userSessionId);

                response.writeHead(200, {'Content-Type': 'text/plain'});
                response.end('user other operation');
            }
        }
    })
});

server.listen(3000, ()=>{
    console.log('listening to port 3000');
});