const koa = require('koa');
const koaRouter = require('koa-router');
const numCpus = require('os').cpus().length;
const cluster = require('cluster');


const app = new koa();
const router = new koaRouter();

if(cluster.isMaster) {
    console.log(`${numCpus}`);
    for (var idx = 0; idx < numCpus; idx++) {
        cluster.fork();
    }
} else {
    app.use(router['routes']());
    router.get('/', (ctx, next) => {
        var result = fibo(35);
        ctx.body = `${result}`;
    });
    if(!module.parent) {
        app.listen(8888);
        console.log('server was start');
    }
}

function fibo(n) {
    return n > 1 ? fibo(n - 1) + fibo(n-2) : 1
}


// 没有经过cluster集群优化
// const koa = require('koa');
// const koaRouter = require('koa-router');

// const app = new koa();
// const router = new koaRouter();

// function fibo(n) {
//     return n > 1 ? fibo(n - 1) + fibo(n - 2) : 1
// }

// app.use(router['routes']());

// router.get('/', (ctx, next) => {
//     var result = fibo(35);
//     ctx.body = `${result}`;
// });

// if(!module.parent) {
//     app.listen(8888);
//     console.log('server was start.');
// }
