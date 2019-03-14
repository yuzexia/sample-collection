### koa中间件的开发与使用

- koa v1和v2中使用到的中间件的开发和使用

```js
// generator中间件返沪爹应该是function *()函数
/* ./middleware/logger-generator.js */
function log( ctx ) {
    console.log( ctx.method, ctx.header.host + ctx.url )
}

module.exports = function () {
    return function * ( next ) {

        // 执行中间件的操作
        log( this )

        if ( next ) {
            yield next
        }
    }
}

// async中间件
function log(ctx) {
    console.log(ctx.method, ctx.header.host + ctx.url)
}
module.exports = function() {
    return async function(ctx, next) {
        log(ctx)
        awarit next()
    }
}

```

- generator中间件开发在koa v1和 v2中使用
    - v1中使用 app.use(middleware)
    - v2中使用 app.use(convert(middle)); 使用koa-convert进行封装一下才能在koa v2中使用
- async await 中间件开发和只能在koa v2中使用
