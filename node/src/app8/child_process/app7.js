const childProcess = require('child_process');

// exec是带有回调的方式来创建一个子进程
childProcess.exec('node app8', (error, stdout, stderr)=>{
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log(stdout.toString());
    }
});
