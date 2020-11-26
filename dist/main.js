"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const koaRouter = require("koa-router");
const app = new Koa();
const router = new koaRouter({
    prefix: '/devtool'
});
app.use(router.routes());
app.listen(3000);
console.log('Server running on port 3000');
//# sourceMappingURL=main.js.map