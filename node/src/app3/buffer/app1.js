const buffer = Buffer.alloc(128);

const length = buffer.write('hello卧槽', 'utf-8');

// 11
console.log('byte count:' + length);
