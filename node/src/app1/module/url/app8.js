const url = require('url');

const urlObject = {
    'host': 'www.test.com',
    'port': 80,
    'protocol': 'http',
    'search': '?userId=123',
    'query': 'order=12',
    'path': '/'
};

let realAddress = url.format(urlObject);

console.log(realAddress);