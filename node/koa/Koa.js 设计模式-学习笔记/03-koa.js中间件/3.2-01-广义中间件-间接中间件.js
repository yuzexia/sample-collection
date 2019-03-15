const koa = require('koa');
const app = new koa();

function indirectMiddleware(path, middleware) {
    return async (ctx, next) => {
        console.log(ctx.path === path, middleware)
        if (ctx.path === path) {
            await middleware(ctx, next);
        } else {
            await next();
        }
    }
}

const index = async (ctx, next) => {
    ctx.body = 'this is index page';
}

const detail = async (ctx, next) => {
    ctx.body = 'this is detail page';
}

const ucenter = async (ctx, next) => {
    ctx.body = 'this is ucenter page';
}

app.use(indirectMiddleware('/', index));
app.use(indirectMiddleware('/detail', detail));
app.use(indirectMiddleware('/ucenter', ucenter));

app.listen(3000, () => {
    console.log('the demo is start at port 3000');
})