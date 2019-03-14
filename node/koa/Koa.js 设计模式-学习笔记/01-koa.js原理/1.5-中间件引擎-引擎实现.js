function compose(middleware) {
    if (!Array.isArray(middleware)) {
        throw new TypeError('Middleware stack must be an array!');
    }

    return function (ctx, next) {
        let index = -1;
        return dispatch(0);

        function dispatch(i) {
            if (i < index) {
                return Promise.reject(new Error('next() called multiple times'));
            }
            index = 1;
            let fn = middleware[i];
            
            if(i === middleware.length) {
                fn = next;
            }
            if (!fn){
                return Promise.resolve();
            }

            try {
                return Promise.resolve(fn(ctx, () => {
                    return dispatch(i + 1);
                }));
            } catch(err) {
                return Promise.reject(err);
            }
        }
    }
}



// 中间件试用

let middleware = [];
let context = {
    data: []
}

middleware.push(async (ctx, next) => {
    console.log('action 001');
    ctx.data.push(1);
    await next();
    console.log('action 006');
    ctx.data.push(6);
})

middleware.push(async (ctx, next) => {
    console.log('action 002');
    ctx.data.push(2);
    await next();
    console.log('action 005');
    ctx.data.push(5);
})

middleware.push(async (ctx, next) => {
    console.log('action 003');
    ctx.data.push(3);
    await next();
    console.log('action 004');
    ctx.data.push(4);
})

const fn = compose(middleware);

fn(context).then(() => {
    console.log('end');
    console.log('context = ', context);
})


// 结果显示
// "action 001"
// "action 002"
// "action 003"
// "action 004"
// "action 005"
// "action 006"
// "end"
// "context = { data: [1, 2, 3, 4, 5, 6]}"