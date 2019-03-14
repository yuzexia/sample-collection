

// 原生回调方法

function func(num, callback) {
    setTimeout(() => {
        try {
            let result = 1/num
            callback(result, null)
        } catch(err) {
            callback(null, err)
        }
    }, 10)
}

func(1, (result, err) => {
    if(err) {
        console.log(err)
    } else {
        console.log(result)
    }
})

// promise
function func1(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let result = 1 / num
            resolve(result)
        }, 10)
    })
}

func1(2).then(result => {
    console.log(result)
}).catch(err => {
    console.log(err)
})