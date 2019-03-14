function getSyncTime() {
    return new Promise((resolve, reject) => {
        try{
            let startTime = new Date().getTime()
            setTimeout(() => {
                let endTime = new Date().getTime()
                let data = endTime - startTime
                resolve(data)
            }, 500)
        }catch{
            reject(err)
        }
    })
}

async function getSyncData() {
    let time = await getSyncTime()
    let data = `endTime - startTime = ${time}`
    return data
}

async function getData() {
    let data = await getSyncData()
    console.log(data)
}

getData()


// 从例子中可以看出，async/await的特点
// 1.可以让异步逻辑用同步写法实现
// 2.最底层的await返回需要是Promise对象
// 3.可以通过多层async function 的同步写法代替传统的callback嵌套