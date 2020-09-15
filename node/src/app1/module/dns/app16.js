const dns = require('dns');

const domain = 'www.sohu.com';

// 由域名解析ip地址
dns.resolve(domain, function (error, address) {
    if (error) {
        console.log(error);
        return;
    }
    console.log(address);
});