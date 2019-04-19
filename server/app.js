import koa from 'koa';
import Router from 'koa-router';
// const koa = require('koa');
// const Router = require('koa-router');
const enrollRoute = require('./router/index.js');
const app = new koa();
const router = new Router();

const port = 3300;
app.use(enrollRoute(router));
app.listen(port);
console.log(`server listener ${port}`);