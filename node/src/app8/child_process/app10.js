const childProcess = require('child_process');

// execFile会创建一个子进程来执行一个文件
childProcess.execFile('node', ['app9'], (error, stdout, stderr)=> {
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log(stdout.toString());
    }
});