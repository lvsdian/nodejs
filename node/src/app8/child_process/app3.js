const childProcess = require('child_process');

// spawn产生一个子进程，这个子进程用来执行dir命令,没有参数（这个子进程可以执行node命令，也可以执行系统命令）
const dirChildProcess = childProcess.spawn('dir');

// 获取这个命令执行的结果
dirChildProcess.stdout.on('data', (data)=>{
    console.log(data.toString());
    console.log(`child process id: ${dirChildProcess.pid}`);
});


dirChildProcess.on('exit', (code, signal)=>{
    console.log(code);
    console.log(signal);
});