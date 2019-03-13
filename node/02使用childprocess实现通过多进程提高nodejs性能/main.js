const koa = require('koa');
const koaRouter = require('koa-router');
const fork = require('child_process').fork;

const app = new koa();
const router = new koaRouter();

app.use(router['routes']());
router.get('/', (ctx, next) => {
    var worker = fork('./work_fibo.js');

    worker.on('message', m => {
        if (typeof m === 'object' && m.type === 'fibo') {
            worker.kill();
            ctx.body = m.result.toString();
        }
    });

    worker.send({type: 'fibo', num: 35}, (err) => {
        console.log(`${err}`);
    });
    console.log(`${worker.pid}`);
});

if(!module.parent) {
    app.listen(8888);
    console.log(`server was start.`);
}


