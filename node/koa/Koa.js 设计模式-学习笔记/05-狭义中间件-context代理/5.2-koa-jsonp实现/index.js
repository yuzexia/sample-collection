const koa = require('koa');
const jsonp = require('./jsonp');

const app = new koa();

jsonp(app, {});

app.use(async (ctx, next) => {
    await ctx.jsonp({
        data: 'this is a demo',
        success: true
    });
});

app.listen(3000, () => {
    console.log('[demo] jsonp is starting at port 3000');
})