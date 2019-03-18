const koa = require('koa');

const logger = require('./logger');

const app = new koa();


app.use(logger);

app.use((ctx, next) => {
    ctx.body = 'hello world';
})

app.listen(3000, () => {
    console.log('[demo] is starting at port 3000');
})
