// 自定义事件
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('myEvent', function myListener1() {
    console.log("myListener1");
});

emitter.on('myEvent', function myListener2(param1, param2) {
    console.log(`myListener2:${param1}, ${param2}`);
});

emitter.on('myEvent', function myListener3(...params) {
    const values = params.join(', ');
    console.log(`myListener3:${values}`);
});

console.log(emitter.listeners('myEvent'));

emitter.emit('myEvent', 'a', 'b', 'c', 'd');