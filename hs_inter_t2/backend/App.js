const http = require('http');

http.createServer((res, resp)=>{
resp.write("<h1>Hello from hs_inter_t2 backend!</h1>");
resp.end ();

}).listen(4800);
