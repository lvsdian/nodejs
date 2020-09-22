const buffer1 = Buffer.from('你好世界');
// buffer --> string
const jsonString = JSON.stringify(buffer1);
console.log(jsonString);

// string --> object
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);

// object --> buffer
const buffer2 = Buffer.from(jsonObject);
console.log(buffer2.toString('utf8'));

