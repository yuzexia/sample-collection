
const koa = require('koa')
const koaRouter = require('koa-router')
const numCpus = require('os').cpus().length
const cluster = require('cluster')


const app = new koa()
const router = new koaRouter()
app.use(router['routes']())

// node单线程
// dowork(5000)方法会暂停5秒钟，由于长时间的等待时间会使得node陷入到停顿的状态。当其他的请求来的时候，也只能够等待。例如当访问后立即访问localhost:3000/detail，只能够等待一段时间。
// router.get('/', (ctx, next) => {
//     ctx.body = 'yuze'
//     dowork(5000)
// })

// router.get('/detail', (ctx, next) => {
//     ctx.body = 'yuze2222'
// })


// app.listen(3000)
// console.log('server was start...')


// 

// cluster多线程node增强node表现
// 使用nodejs内置的cluster module可以让多个node实例同时运行，管理多个node实例。
// cluster管理多个node实例。cluster manager实例与child实例都会调用此文件中的代码。

// 通过cluster.isMaster将两者区分开。
// cluster manager 中cluster.isMaster为true。
// child实例实例中cluster.isMaster为false。

// cluster.fork()代表新开一个child 实例。

if(cluster.isMaster) {
    console.log(`${numCpus}`)
    for(var i = 0; i < numCpus; i++) {
        cluster.fork()
    }
} else {
    router.get('/', (ctx, next) => {
        dowork(5000)
        ctx.body = 'cluster.yuze'
    })
    router.get('/detail', (ctx, next) => {
        ctx.body = 'cluser.detail.yuze'
    })
    if(!module.parent) {
        app.listen(3000)
        console.log('server was start')
    }
}







function dowork(duration) {
    const start = Date.now()
    while(Date.now() - start < duration){
        console.log('暂停中....')
    }
    console.log('暂停结束')
}