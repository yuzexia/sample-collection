const koa = require('koa');

const app = new koa();

const middleware1 = async (ctx, next) => {
    console.log(1);
    await next();
    console.log(6)
};

const middleware2 = async (ctx, next) => {
    console.log(2);
    await next();
    console.log(5)
};

const middleware3 = async (ctx, next) => {
    console.log(3);
    await next();
    console.log(4)
};

app.use(middleware1);
app.use(middleware2);
app.use(middleware3);

app.use(async (ctx, next) => {
    ctx.body = 'hello koa...'
})

app.listen(3000, () => {
    console.log('server was start...')
})

// 启动访问浏览器
// 控制台会出现以下结果
// 1
// 2
// 3
// 4
// 5
// 6