const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('index', '/', (ctx) => {
  ctx.body = '<h1>Hello İndex Page</h1>';
});
router.get('about', '/about', (ctx) => {
    ctx.body = '<h1>Hello About Page</h1>';
  });
  router.get('contact', '/contact', (ctx) => {
    ctx.body = '<h1>Hello Contact Page</h1>';
  });
  router.get('Admin', '/admin', (ctx) => {
    ctx.body = '<h1>Hello Admin Page</h1>';
  });
app
  .use(router.routes())
  .use(router.allowedMethods());
const port = 3000;
app.listen(port, () => {
    console.log(`This application is starting on ${port}`);
});