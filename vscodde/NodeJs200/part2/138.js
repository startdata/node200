const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');

http.createServer((req,res) => {
    let pathname = url.parse(req.url);
    pathname = url.parse(req.url).pathname
    if(pathname ==='/'){
        fs.readFile('./138.example.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
            console.log(url.parse(req.url));
        });
    } else if (pathname === '/example'){
        fs.readFile('./136.example.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
            console.log(url.parse(req.url));
        })
    }
}).listen(50000, () => {
    console.log('서버가 동작 중입니다, httpL//127.0.0.1:50000');
})