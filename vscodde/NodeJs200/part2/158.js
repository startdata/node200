const pug = require('pug');
const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    fs.readFile('158', 'utf-8', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        const fn = pug.compile(data);
        res.end(fn({
            table_name: 'Multiplication table 19 X ?',
            number: '19',
        }));
    });
}).listen(50000, () => {
    console.log(`서버가 동작`);
})
