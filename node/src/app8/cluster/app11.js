const cluster = require('cluster');
const http = require('http');
const os = require('os');

const cpuCount = os.cpus().length;

// 调度策略
// 由node进程轮询
// cluster.schedulingPolicy = cluster.SCHED_RR;
// 交给操作系统
// cluster.schedulingPolicy = cluster.SCHED_NONE;

if (cluster.isMaster) {
    console.log(`核数：${cpuCount}`);
    for (let i = 0; i < cpuCount; i++) {
        // fork出来的每个子进程都会从上到下执行这个文件
        // 凡是fork出来的进程都是worker进程，本来的进程就是master进程
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) =>{
        console.log(worker.process.pid);
    })
} else {
    const httpServer = http.createServer((request, response)=>{
        let data = '';
        request.on('data', (chunk) =>{
            data += chunk;
        });
        request.on('end', ()=>{
            response.writeHead(200, {'Content-Type':'text/plain'});
            response.end(`${process.pid}`);
        });
    });
    httpServer.listen(3000, ()=>{
        console.log('listening to port 3000');
    });
}
