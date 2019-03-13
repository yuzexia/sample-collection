
class App {
    constructor() {
        this.handlers = {};
        this.get = this.route.bind(this, 'GET')
        this.post = this.route.bind(this, 'POST')
    }

    route(method, path, ...handler) {
        console.log('path::::', path)
        let pathInfo = (this.handlers[path] = this.handlers[path] || {})
        console.log('pathInfo:::', pathInfo)

        pathInfo[method] = handler
    }
    callback() {
        return (request, response) => {
            let {url: path, method} = request;
            let handlers = this.handlers[path] && this.handlers[path][method];

            if(handlers) {
                let context = {}
                function next(handlers, index= 0) {
                    handlers[index] && handlers[index].call(context, request, response, () => {
                        next(handlers, index + 1)
                    })
                }
                next(handlers)
            } else {
                response.end('404');
            }
        }
    }
}

const http = require('http');
const app = new App();

function generatorId(request, response, next) {
    this.id = 123
    next()
  }

app.get('/', generatorId, function(request, response) {
    response.end(`hello world ${this.id}`)
})
app.post('/', function(request, response) {
    response.end('hello world with post')
})
app.get('/detail', function(request, response) {
    response.end('hello detail pageccc')
})

http.createServer(app.callback())
.listen(888, () => console.log('server run as http://127.0.0.1:888'))


