const fs = require('fs');
const http = require('http');

http.createServer((req,res) => {
    fs.readFile('./136.example.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
}).listen(50000, () => {
    console.log('서버가 동작 중입니다, http://127.0.0.1:50000');
});