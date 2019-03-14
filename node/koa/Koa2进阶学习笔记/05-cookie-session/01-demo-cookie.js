const koa = require('koa')
const app = new koa()

app.use(async (ctx) => {
    if (ctx.url === '/index') {
        ctx.cookies.set(
            'cid',
            'hello koa2',
            {
                domain: 'localhost',    // 写cookie所在的域名
                path: '/index',         // 写cookie所在路径
                maxAge: 10 * 60 * 1000, // cookie有效时长
                expires: new Date('2019-03-14'), //cookie失效事件
                httpOnly: false,        // 是否只用于http请求中获取
                overwrite: false        // 是否允许重写
            }
        )
        ctx.body = 'cookie is ok'
    } else {
        ctx.body = 'hello world'
    }
})

app.listen(3000, () => {
    console.log('[demo] cookie is starting at port 3000')
})
