const querystring = require("querystring");

const obj = {
    name: 'zhangsan',
    address: 'xiamen'
};

const result = querystring.stringify(obj);

console.log(obj);