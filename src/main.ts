import * as Koa from 'koa';
import * as koaRouter from 'koa-router';

const app = new Koa();


const router =new koaRouter({
    prefix: '/',
  })

app.use(router.routes());

app.listen(3000);

console.log('Server running on port 3000');