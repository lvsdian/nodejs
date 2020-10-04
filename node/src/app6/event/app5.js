const EventEmitter = require('events');
const emitter = new EventEmitter();

// "newListener"是"EventEmitter"内置的事件名称，表示如果有新的监听器附加到
// 某个事件上，回调就会被触发
emitter.once('newListener', (event, listener) => {
    if (event === 'myEvent') {
        emitter.on('myEvent', ()=>{
            console.log('hello');
        });
    }
});

emitter.on('myEvent', ()=>{
    console.log('world');
});

emitter.emit('myEvent');