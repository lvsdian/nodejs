[1, 2, 3, 4, 5].forEach(i =>{
    console.log(i);
});


// 这里，父子进程间通信通过 IPC 方式完成
// 监听message事件，如果有，打印message并返回一个message
process.on('message', (message => {
    console.log(message);
    process.send("world");
}));