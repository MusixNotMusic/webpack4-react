import koa from 'koa';
import Router from 'koa-router';
import serve from 'koa-static';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import path from 'path';
// 参数
const port = 5500;
const staticPath = '../static/'

// 注册路由 controller
const enrollRoute = require('./router/index.js');

const app = new koa();
const router = new Router();
app.use(async(ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', "http://localhost:8777");
    //     ctx.set('Access-Control-Allow-Origin', ctx.headers.origin); // 很奇怪的是，使用 * 会出现一些其他问题
    ctx.set('Access-Control-Allow-Headers', 'content-type');
    ctx.set('Access-Control-Allow-Methods', 'OPTIONS,GET,HEAD,PUT,POST,DELETE,PATCH')
    await next();
})
app.use(logger());
app.use(bodyParser());
app.use(enrollRoute(router));
app.use(serve(
    path.join(__dirname, staticPath)
))

app.listen(port);
console.log(`server listener ${port}`);