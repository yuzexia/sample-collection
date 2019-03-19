## jsonp实现

> 初始化时候，实例代理上下文context实现

实例代理的还有另外别计较代表性的中间件是官方提供`koa-safe-jsonp`中间件，把jsonp的方法挂载在koa实例app的app.context属性中

> 常见实例代理上下文context实现步骤

- 初始化一个koa实例，`let app = new koa();`
- 将需要的属性或方法demo挂载在app.context()上，app.context.demo
- 在app.use()中间件直接使用ctx.demo方法或属性

#### 实现步骤

> jsonp的实现步骤

- 01，初始化一个实例`let app = new koa();`
- 02，将需要的属性或方法，jsonp挂载在`app.context上，app.context.jsonp`
- 03，在`app.use()`中间件直接使用`ctx.jsonp`方法或属性渲染模板
- 04，当前请求响应要返回jsonp数据时候`ctx.body = ctx.jsonp(result)`
