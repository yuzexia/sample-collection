const koa = require('koa')
const koaRouter = require('koa-router')
const fs = require('fs')

const app = new koa()

// 子路由
let home = new koaRouter()

home.get('/', async ( ctx )=>{
    let html = `
      <ul>
        <li><a href="/page/helloworld">/page/helloworld</a></li>
        <li><a href="/page/404">/page/404</a></li>
      </ul>
    `
    ctx.body = html
})

// 子路由2
let page = new koaRouter()
page.get('/404', async ( ctx )=>{
    ctx.body = '404 page!'
  }).get('/helloworld', async ( ctx )=>{
    ctx.body = 'helloworld page!'
})

// 装载所有子路由
let router = new koaRouter()
router.use('/', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())
// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())


app.listen(3000, () => {
    console.log('[demo] route-use-middleware is starting at port 3000')
})





