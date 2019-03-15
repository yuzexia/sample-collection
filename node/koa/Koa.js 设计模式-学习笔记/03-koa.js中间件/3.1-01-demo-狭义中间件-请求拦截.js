const koa = require('koa');
const app = new koa();

const middleware = async (ctx, next) => {
    // 中间件拦截请求
    // 把所有请求不是以/page/开头的路径全部抛500错误
    let reqPath = ctx.request.path;
    if (reqPath.indexOf('/page/') !== 0) {
        ctx.throw(500)
    }
    await next();
}

const page = async(ctx, next) => {
    ctx.body = `
        <html>
            <head></head>
            <body>
            <h1>${ctx.request.path}</h1>
            </body>
        </html>`;
}

// 使用中间件

app.use(middleware);
app.use(page);
app.listen(3000, () => {
    console.log('the demo is start at port 3000');
})