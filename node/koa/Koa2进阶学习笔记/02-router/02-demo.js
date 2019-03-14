const koa = require('koa')
const fs = require('fs')

const app = new koa()

function render(page) {
    console.log(page)
    return new Promise((resolve, reject) => {
        let viewUrl = `./view/${page}`
        fs.readFile(viewUrl, 'binary', (err, data) => {
            if (err) {
                reject(err)
            } else {
                console.log(data)
                resolve(data)
            }
        })
    })
}

/**
 * 根据URL获取HTML内容
 * @param  {string} url koa2上下文的url，ctx.url
 * @return {string}     获取HTML文件内容
 */

async function route(url) {
    let view = '404.html'
    switch(url) {
        case '/':
            view = 'index.html'
            break
        case '/index':
            view = 'index.html'
            break
        case '/todo':
            view = 'todo.html'
            break
        case '/404':
            view = '404.html'
            break
        default:
            break
    }
    let html = await render(view)
    return html
}

app.use(async (ctx) => {
    let url = ctx.request.url
    let html = await route(url)
    ctx.body = html
})

app.listen(3000)
console.log('[demo] route-simple is starting at port 3000')