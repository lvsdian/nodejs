const buffer1 = Buffer.from("hello");
const buffer2 = Buffer.from("world");

// h 位于 w之前，相当于 h < w，所以返回-1
const compareResult = buffer1.compare(buffer2);

console.log(compareResult);