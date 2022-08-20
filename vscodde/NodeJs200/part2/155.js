const ejs = require('ejs');
const fs = require('fs');
const http = require('http');


http.createServer((req,res)=> {
    fs.readFile(`155.ejs.example.ejs`, 'utf-8', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(ejs.render(data, {
            table_name : 'Multiplication table 19',
            number : '19',
        }));
    });
}).listen(50000, () => {
    console.log(`서버가 동작 중`);
})