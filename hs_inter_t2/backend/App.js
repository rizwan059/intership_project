const http = require('http');

const arg = process.argv;
const port = arg[2];                        

http.createServer((res, resp) => {
    resp.setHeader('Content-Type', 'text/html');
    resp.write("<h1>Hello from H&S Solutions!</h1>");
    resp.end();

}).listen(port);