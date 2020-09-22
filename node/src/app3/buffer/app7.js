const str1 = 'utf8';
const str2 = 'utf-8';
const str3 = 'UTF-8';
const str4 = 'gbk';

// true
console.log(Buffer.isEncoding(str1));
// true
console.log(Buffer.isEncoding(str2));
// true
console.log(Buffer.isEncoding(str3));
// false
console.log(Buffer.isEncoding(str4));