const http = require('http');

const arg = process.argv;
const port = arg[2]; 

const userDAta = {
    name: "John",
    age: 30,
    city: "New York"
};

http.createServer((res, resp) => {
    resp.setHeader('Content-Type', 'text/html', 'application/json');
    resp.write("<h1>Hello from hs_inter_t2 backend!</h1>");
    resp.end();
    JSON.stringify(userDAta);

}).listen(port);
