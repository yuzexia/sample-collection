# koa.js中间件分类

> 市面上大部分web框架，都提供了很多web相关的能力支持

- http服务
- 路由管理
- 模块渲染
- 日志
- 插件/中间件等AOP(面向切面编程)能力
- 其他能力

> koa.js作为一个web框架，总结出来只提供了两种能力

- http服务
- 中间件机制(AOP切面)

> 综上所述，用koa.js想实现大部分web功能的话，就需要整合相关功能的中间件，意思就是说：koa.js就是中间件的大容器，任何web所需的能力都可以通过中间件来实现

## koa.js中间件的分类

- 狭义中间件
- 广义中间件

### 狭义中间件

> 特点

- 一切皆中间件
- 中间件内操作请求request
    - 请求拦截
- 中间件内操作响应response
    - 响应拦截
- 中间件内操作上下文context
    - 直接上下文代理，初始化实例时候挂载代理在app.context上
    - 请求过程上下文代理，请求时候挂载代理在ctx上
- 大多数直接使用app.use()加载
    - 注意，初始化实例挂载代理context不被app.use()

> 举个栗子 例如 中间件koa-static主要是靠拦截请求和响应，加载静态资源，中间件koa-bodyparser主要是拦截请求后解析出HTTP请求体重的POST数据，再挂载到ctx上。

#### 请求拦截

```js
const koa = require('koa');
const app = new koa();

const middleware = async (ctx, next) {
    // 中间件拦截请求
    // 把所有请求不是以/page/开头的路径全部抛500错误
    let reqPath = ctx.request.path;
    if (reqPath.indexOf('/page/') !== 0) {
        ctx.throw(500)
    }
    await next():
}

const page = async(ctx, next) {
    ctx.body = `
        <html>
            <head></head>
            <body>
            <h1>${ctx.request.path}</h1>
            </body>
        </html>`;
}

// 使用中间件

app.use(middleware);
app.use(page);
app.listen(3000, () => {
    console.log('the demo is start at port 3001');
})

```

#### 响应拦截

```js
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
```
#### context挂载代理

- 请求代理注入
    - 直接被app.use
    - 请求时候才有注入
    - 每次请求的注入都不同
- 初始化实例(应用)代理注入
    - 直接注入到app.context
    - 初始化应用时才注入
    - 只注入一次，每次请求都可以使用

##### 请求时挂载代理context

```js
const koa = require('koa');

const app = new koa();

const middleware = async (ctx, next) => {
    // 中间件 代理/挂载上下文
    // 把所有当前服务的进程PID，内存使用情况方法代理/挂载在ctx上
    ctx.getServerInfo = () => {
        function parseMem (mem = 0) {
            let memVal = mem / 1024 /1024;
            memVal = memVal.toFixed(2) + 'MB';
            return memVal;
        }

        function getMemInfo() {
            let memUsage = process.memoryUsage();
            let rss = parseMem(memUsage.rss);
            let heapTotal = parseMem(memUsage.heapTotal);
            let heapUsed = parseMem(memUsage.heapUsed);
            return {
                pid: process.pid,
                rss,
                heapTotal,
                heapUsed
            }
        }
        return getMemInfo();
    }
    await next();
}

const page = async (ctx, next) => {
    const serverInfo = ctx.getServerInfo();
    ctx.body = `
                <html>
                <head></head>
                <body>
                    <p>${JSON.stringify(serverInfo)}</p>
                </body>
                </html>
            `; 
}

app.use(middleware);
app.use(page);

app.listen(3000, () => {
    console.log('the demo is start at port 3000');
})

```

##### 初始化挂载上下文context

```js
const Koa = require('koa');
let app = new Koa();

const middleware = function(app) {
  // 中间件在初始化实例 把getServerInfo方法 挂载代理到上下文
  app.context.getServerInfo = function() {
    function parseMem( mem = 0 ) {
      let memVal = mem / 1024 / 1024;
      memVal = memVal.toFixed(2) + 'MB';
      return memVal;
    }

    function getMemInfo() {
      let memUsage = process.memoryUsage();
      let rss = parseMem(memUsage.rss);
      let heapTotal = parseMem(memUsage.heapTotal);
      let heapUsed =  parseMem(memUsage.heapUsed);
      return {
        pid: process.pid,
        rss,
        heapTotal,
        heapUsed
      }
    }
    return getMemInfo()
  };
}

middleware(app);

const page = async function(ctx, next) {
  const serverInfo = ctx.getServerInfo();
  ctx.body = `
      <html>
        <head></head>
        <body>
          <p>${JSON.stringify(serverInfo)}</p>
        </body>
      </html>
    `; 
}

app.use(page);

app.listen(3000, function(){
  console.log('the demo is start at port 3000');
})
```



### 广义中间件

> 特点

- 不直接提供中间件
- 通过间接方式提供了中间件或者子中间件
- 简介被app.use()加载
- 其他方式接入koa切面

> 举个栗子 例如中间koa-router 是先注册路由后形成多个子中间件，后面再封装成一个父中间件提供给app.use()加载，让所有子中间件加载到Koa.js的请求洋葱模型中。

##### 间接中间件

```js
const koa = require('koa');
const app = new koa();

function indirectMiddleware(path, middleware) {
    return async (ctx, next) => {
        console.log(ctx.path === path, middleware)
        if (ctx.path === path) {
            await middleware(ctx, next);
        } else {
            await next();
        }
    }
}

const index = async (ctx, next) => {
    ctx.body = 'this is index page';
}

const detail = async (ctx, next) => {
    ctx.body = 'this is detail page';
}

const ucenter = async (ctx, next) => {
    ctx.body = 'this is ucenter page';
}

app.use(indirectMiddleware('/', index));
app.use(indirectMiddleware('/detail', detail));
app.use(indirectMiddleware('/ucenter', ucenter));

app.listen(3000, () => {
    console.log('the demo is start at port 3000');
})
```

##### 子中间件

> 子中间件是广义中间件的一个最有代表的场景，主要的特点有

- 初始化中间件，内置子中间件列表
- 字中间件列表添加子中间件元素
- 字中间件列表封装成间接中间件，然后让app.use()加载






