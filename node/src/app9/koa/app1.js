const Koa = require('koa');
const app = new Koa();

// 洋葱模型：
// 每一个请求都会通过一层层的中间件到达核心，类似于一圈圈的洋葱，请求从外到内，到核心处
// 处理后，按照相反的顺序返回，再到达用户
// 如下示例中，3个use就是3个中间件，再启动一个服务器监听3000端口，所以访问localhost:3000后，结果：
// myFunction1 started
// myFunction2 started
// myFunction3 started
// myFunction3 finished
// myFunction2 finished
// myFunction1 finished
// myFunction1 started
// myFunction2 started
// myFunction3 started
// myFunction3 finished
// myFunction2 finished
// myFunction1 finished
// 之所以会请求两次，是因为每次都会默认请求favicon.ico这个文件，加上访问的一次，就是两次

// ctx：context
// next：下一个函数的回调
// 这里的use就是一个自定义的中间件
app.use(async (ctx, next) => {
    console.log('myFunction1 started');
    // next()表示调用下一个中间件，await表示next()都执行完，流程才能继续往下走
    await next();
    console.log('myFunction1 finished');
});

app.use(async (ctx, next) => {
    console.log('myFunction2 started');
    await next();
    console.log('myFunction2 finished');
});

app.use(async (ctx, next) => {
    console.log('myFunction3 started');
    await next();
    console.log('myFunction3 finished');
});

app.use(async (ctx) => {
    ctx.response.type = 'text/html';
    ctx.response.body = '<h2>hello koa</h2>';
});

// 监听3000端口
app.listen(3000);

