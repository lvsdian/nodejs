const buffer = Buffer.from('hello');
const myObj = {};
const str = "aa";
const flag = true;
const count = 1;

// object
console.log(typeof  buffer);
// object
console.log(typeof  myObj);
// string
console.log(typeof  str);
// boolean
console.log(typeof  flag);
// number
console.log(typeof count);

// true
console.log(Buffer.isBuffer(buffer));
// false
console.log(Buffer.isBuffer(myObj));