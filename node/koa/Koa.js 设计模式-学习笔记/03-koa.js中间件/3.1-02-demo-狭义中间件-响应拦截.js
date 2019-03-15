const koa = require('koa');
const app = new koa();

const middleware = async(ctx, next) => {
    ctx.response.type = 'text/plain';
    await next();
}
const page = async (ctx, next) => {
    ctx.body = `
      <html>
        <head></head>
        <body>
          <h1>${ctx.path}</h1>
        </body>
      </html>
    `;
}

app.use(middleware);
app.use(page);

app.listen(3000, () => {
    console.log('the demo is start at port 3000');
})