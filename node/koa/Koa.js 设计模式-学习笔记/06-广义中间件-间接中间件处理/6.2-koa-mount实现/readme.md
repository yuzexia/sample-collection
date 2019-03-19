## koa-mount实现

> koa-mount，让多个koa.js子应用合并成一个父应用，用请求的前缀区分子应用。

#### 实现步骤

- 使用过程
    - 初始化子应用koa.js实例
    - 初始化父应用koa.js实例
    - 处理子应用middleware属性，将所有中间件用koa-compose封装成一个子应用中间件
    - 用父应用app.use()加载处理后的子应用中间件
- mount实现过程
    - 输入子应用的前缀和应用实例
    - 获取子应用的中间件集合middleware属性
    - 用koa-compose封装子应用的中间件集合
    - 返回一个父中间件
        - 父中间件里执行compose封装后的子中间件集合
        - 执行前把请求path子应用前缀去掉
        - 执行后把请求path子应用前缀还原到原始请求path
    - 父应用app.use子应用封装后父中间件(compose封装的子应用所有中间件)

#### 依赖

- koa-compose

#### 解读

```js
const path = require('path');
const compose = require('./compose');

function mount(prefix, app) {
  let middleware = app.middleware;
  let middlewareStream = compose(middleware || []);
  if( prefix === '/' ) {
    return middlewareStream;
  }

  return async function( ctx, next ) {
    let mountPath = matchPath(ctx.path); 
    if( !mountPath ) {
      return await next();
    }

    let originPath = ctx.path;
    ctx.path = mountPath;

    await middlewareStream(ctx, async () => {
      ctx.path = originPath;
      await next();
      ctx.path = mountPath
    });

    ctx.path =  originPath;
  }

  function matchPath( originPath ) {
    if( originPath.indexOf(prefix) < 0 ) {
      return false;
    }
    const mountPath = originPath.replace(prefix, '') || '/';
    if( mountPath[0] !== '/' ) {
      return false;
    }
    return mountPath;
  }

}

module.exports = mount;
```


#### 使用

```js
const mount = require('./index');
const Koa = require('koa');

const app1 = new Koa();
const app2 = new Koa();

app1.use(async (ctx, next) => {
  await next()
  ctx.body = 'app 1'
})


app2.use(async (ctx, next) => {
  await next()
  ctx.body = 'app 2'
})

const app = new Koa()

app.use(mount('/app1', app1))
app.use(mount('/app2', app2))

app.listen(3000, () => {
    console.log('listening on port 3000');
})
```