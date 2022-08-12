const http = require('http')
const fs = require('fs')

http.createServer((req,res) => {
    if(req.method === 'GET'){
        fs.readFile('./140.example.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
            console.log(`${req.method}방식의 요청`);
        })
    } else if (req.method === 'POST'){
        req.on('data', (data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
            console.log(`${req.method}방식의 요청`);
        });
    }
}).listen(50000, () => {
    console.log('서버가 동작 중입니다, http://127.0.0.1:50000');
})