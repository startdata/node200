const pug = require('pug');
const fs = require('fs');
const http = require('http');

http.createServer((req,res) => {
    fs.readFile('156.pug.example.pug', 'utf-8', (err,data)=> {
        res.writeHead(200, {'Content-Type': 'text/html'});
        const fn = pug.compile(data);
        res.end(fn());
    });
}).listen(50000, () => {
    console.log('서버 실행중 ');
})