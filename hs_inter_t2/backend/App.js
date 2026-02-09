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

        if (res.url == "/") {
            resp.writeHead(200, { 'Content-Type': 'text/html' });
            resp.write(data);
        } else if (res.url == "/submit") {
            resp.writeHead(200, { 'Content-Type': 'text/html' });
            resp.write("<h1>Form submitted successfully!</h1>");
        }

    });
    resp.end("Hello from hs_inter_t2 backend!");


}).listen(port);