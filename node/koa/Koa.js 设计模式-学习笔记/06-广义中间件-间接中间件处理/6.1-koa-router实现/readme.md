## koa-router实现

> 广义中间件，间接中间件方式

- 不直接提供中间件
- 通过间接方式提供了中间件，最常见的是“间接中间件”和“子中间件”
- 间接被app.use()加载
- 其他方式接入koa切面 

> 用最简单的方式实现koa-router最简单的功能

#### 实现步骤

- 初始化路由实例
- 注册路由请求信息缓存到实例中
    - 请求类型
    - 请求path
    - 对应的请求后操作
- 注册的路由操作就是子中间件
- 路由实例输出父中间件
    - 返回一个父中间件
    - 中间件里每次请求进行遍历匹配缓存中注册的路由操作
    - 匹配上请求类型，路径就执行对应路由子中间件
- app.use()路由实例返回的父中间件

#### 解读

```js
const methods = ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'];

class Layer {
    constructor(path, methods, middleware, opts) {
        this.path = path;
        this.methods = methods;
        this.middleware = middleware;
        this.opts = opts;
    }
}

class Router {
    constructor(opts = {}) {
        this.stack = [];
    }

    register(path, methods, middleware, opts) {
        let route = new Layer(path, methods, middleware, opts);
        this.stack.push(route);
        return this;
    }

    routes() {
        let stock = this.stack;
        return async function(ctx, next) {
            let currentPath = ctx.path;
            let route;

            for (let i = 0; i < stock.length; i++) {
                let item = stock[i];
                if (currentPath === item.path && item.methods.indexOf(ctx.method) >= 0) {
                    route = item.middleware;
                    break;
                }
            }
            if(typeof route === 'function') {
                route(ctx, next);
                return ;
            }
            await next();
        }
    }
}

methods.forEach(method => {
    Router.prototype[method.toLowerCase()] = Router.prototype[method] = function(path, middleware){
        this.register(path, [method], middleware);
    };
});

module.exports = Router;

```


#### 使用

```js
const Koa = require('koa');
const Router = require('./router');

const app = new Koa();

// 初始化路由实例
const router = new Router();

// 注册路由请求信息缓存到实例中
router.get('/index', async ctx => {ctx.body = 'index page';});
router.get('/post', async ctx => {ctx.body = 'post page';});
router.get('/list', async ctx => {ctx.body = 'list page';});
router.get('/item', async ctx => {ctx.body = 'item page';});

// 路由实例输出父中间件 router.routes（）
app.use(router.routes());

app.use(async ctx => {
    ctx.body = '404'
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})
```