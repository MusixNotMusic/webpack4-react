import koa from 'koa';
import Router from 'koa-router';
import serve from 'koa-static';
import path from 'path';
// 参数
const port = 3300;
const staticPath = '../static/'

// 注册路由 controller
const enrollRoute = require('./router/index.js');

const app = new koa();
const router = new Router();

app.use(enrollRoute(router));
app.use(serve(
    path.join(__dirname, staticPath)
))

app.listen(port);
console.log(`server listener ${port}`);