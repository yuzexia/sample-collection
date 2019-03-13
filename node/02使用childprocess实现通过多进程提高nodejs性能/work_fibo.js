var fibo = (n) => {
    return n > 1 ? fibo(n - 1) + fibo(n - 2) : 1
}

process.on('message', m => {
    if(typeof m === 'object' && m.type === 'fibo'){
        var num = fibo(m.num);
        process.send({type: 'fibo', result: num});
    }
})

process.on('SIGHUP', () => {
    process.exist();
})
