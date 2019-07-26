const Koa = require("Koa");
const cors = require('koa2-cors');
// 允许接口跨域
const bodyParser = require('koa-bodyparser');
// 处理post参数
const router = require("./router/router");

const app = new Koa();
app.use(cors());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

app.use(async (ctx) => {
    console.log(ctx.status);
    switch (ctx.status) {
        case 404:
            console.log(ctx.status);
            ctx.body = '404';
            break;
        case 500:
            console.log(ctx.status);
            ctx.body = '500'
            break;
    }
})

app.listen(9000);
console.log('服务已启动————prot 9000');