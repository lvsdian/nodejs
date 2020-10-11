// node版本
console.log(process.version);

// 更多的信息的版本
console.log(process.versions);

// node所运行的平台版本，mac--darwin, windows--win32
console.log(process.platform);

// E:\nodejs\node.exe
console.log(process.execPath);

// 打印一些配置的信息
console.log(process.config);

// node的进程id
console.log(process.pid);

// 当前正在运行的nodejs在控制台上的窗口的名字
console.log(process.title);

// 打印当前操作系统的架构：x64
console.log(process.arch);

// 打印内存使用情况
console.log(process.memoryUsage());

// 获取当前的目录，cwd即current working directory
console.log(process.cwd());
// 改变目录，改到上一级
process.chdir('../');
// 再次用cwd获取目录，就是上一次调用cwd()获取的目录的上一级目录
console.log(process.cwd());

// nodejs所处的一些环境属性
console.log(process.env);

// 获取node执行时间，单位为s
console.log(process.uptime());

process.on('exit', ()=>{
    console.log('node process exited');
});

// 在 exit 事件结束之前执行
process.on('beforeExit', ()=>{
    console.log('node process before exited');
});

process.on('uncaughtException', (error => {
    console.log(error);
    console.log("=============");
    console.log('uncaughtException occurred');
}));

// SIGINT 表示操作系统的信号
process.on('SIGINT', ()=>{
    console.log('received sigint info');
});
// 这个setTimeout表示在指定的timeout时间后，去执行回调，到达这个指定时间前
// 我们收到停止这个程序，相当于一个中断信号，那么上面的SIGINT事件就会触发，执行其回调
setTimeout(()=>{
    console.log('timeout');
}, 100000);
