const http = require('http');
const fs = require('fs');

const arg = process.argv;
const port = arg[2];

http.createServer((res, resp) => {

    fs.readFile('./index.html', (err, data) => {
        if (err) {
            resp.writeHead(404, { 'Content-Type': 'text/html' });
            resp.write("<h1>404 Not Found</h1>");
            resp.end("internal function is running");
            return;
        }
    });
    resp.end("Hello from hs_inter_t2 backend!");


}).listen(port);