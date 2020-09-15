const url = require('url');

const uslString = 'http://www.test.com?userId=123';
const urlObject = url.parse(uslString);

console.log(urlObject)