const dns = require('dns')

const domain = 'www.sohu.com';

// 由ip地址解析域名：[ 'public1.114dns.com' ]
dns.reverse('114.114.114.114', function (error, domain) {
    console.log(domain);
});