const koa = require('koa');
const path = require('path');
const combineRouters = require('koa-combine-routers');
const bodyParser = require('koa-bodyparser');
const koaStatic = require('koa-static');
const compress = require('koa-compress');

const app = new koa();
const userRouter = require('../router/userRouter');

app.use(compress({
    threshold: 2048
}));

app.use(bodyParser());

app.use(koaStatic(path.join(__dirname, '../dist')));

const unifiedRouters = combineRouters(
    userRouter
)();

app.use(unifiedRouters);

module.exports = app;

