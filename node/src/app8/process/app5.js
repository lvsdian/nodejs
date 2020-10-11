const childProcess = require('child_process');

// fork出一个子进程，专门用来执行node命令
// silent将主子进程的输出分开
const forkChildProcess = childProcess.fork('./app6', {silent: true});

// 监听message消息并打印
forkChildProcess.on('message', (message)=>{
    console.log(message);
});

forkChildProcess.send('hello');