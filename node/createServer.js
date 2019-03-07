
class App {
    constructor() {
        this.handlers = {};
        this.get = this.route.bind(this, 'GET')
        this.post = this.route.bind(this, 'POST')
    }

    route(method, path, handler) {
        let pathInfo = (this.handlers[path] = this.handlers[path] || {})

        pathInfo[method] = handler
    }
    callback() {
        return (request, response) => {
            let {url: path, method} = request
            this.handlers[path] && this.handlers[path][method]
                ? this.handlers[path][method](request, response)
                : response.end('404');
        }
    }
}

const http = require('http');
const app = new App();

app.get('/', function(request, response) {
    response.end('hello world')
})
app.post('/', function(request, response) {
    response.end('hello world with post')
})
app.get('/detail', function(request, response) {
    response.end('hello detail pageccc')
})

http.createServer(app.callback())
.listen(888, () => console.log('server run as http://127.0.0.1:888'))


