const childProcess = require('child_process');

// 产生一个子进程，这个子进程用来执行node命令，参数为 app2,即执行 node app2（这个子进程可以执行node命令，也可以执行系统命令）
const nodeChildProcess = childProcess.spawn('node', ['app2']);

// 获取这个命令执行的结果
nodeChildProcess.stdout.on('data', (data)=>{
   console.log(data.toString());
   console.log(`child process id is: ${nodeChildProcess.pid}`);
});

nodeChildProcess.on('exit', (code, signal)=>{
    console.log("code:" + code);
    console.log("signal:" + signal);
});