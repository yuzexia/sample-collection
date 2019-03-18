const koa = require('koa');
const send = require('./koa-send');

const app = new koa();

app.use(async(ctx, next) => {
    await send(ctx, ctx.path, {root: `${__dirname}`});
});

app.listen(3000, () => {
    console.log('listening on port 3000');
})