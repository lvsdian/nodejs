const buffer1 = Buffer.from('a');
const buffer2 = Buffer.from('b');
const buffer3 = Buffer.from('卧槽');

const bufferArray = [buffer1, buffer2, buffer3];

const bufferResult = Buffer.concat(bufferArray, buffer1.length + buffer2.length +buffer3.length);

// 8
console.log(bufferResult.length);

// ab卧槽
console.log(bufferResult.toString('utf8'));