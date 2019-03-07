const http = require('http');

const serverHandler = (request, response) => {
    let responseData = '404';
    let url = request.url;
    let method = request.method;

    if(url === '/') {
        if ( method === 'GET') {
            responseData = 'hello world';
        } else if(method === 'POST') {
            responseData = 'hello world with post';
        }
    } else if(url === '/detail') {
        responseData = "detail page"
    }
    

    response.end(responseData);
}

http.createServer(serverHandler).listen(8888, () => {
    console.log('server run as http://127.0.0.1:8888')
})

