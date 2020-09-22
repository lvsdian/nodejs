const str = "abcde啊";
const buffer = Buffer.from(str);

// 字符串长度是字符个数
// buffer是指定编码下的字节数(utf8编码下一个中文占3个字节)

// 6
console.log(str.length);
// 8
console.log(buffer.length);