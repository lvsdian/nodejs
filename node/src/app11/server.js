const koa = require('koa');
const app = new koa();

app.use(async (ctx) => {
    ctx.response.type = 'application/json';

    const responseBody =  {
        result: {
            code: 0,
            description: 'success'
        }, data: {
            username: 'shanghai',
            address: 'taiwan',
            age: 20
        }
    };
    ctx.body = JSON.stringify(responseBody);
});

app.listen(4000);