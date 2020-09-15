const util = require('util');

const obj = {
    name: 'zhangsan',
    address: 'hainan',
    age: 25,
    married: false,
    getAge: function () {
        return this.age;
    }
};

// 改变obj属性的颜色
const str = util.inspect(obj, {
    'colors': true
});

console.log(str);