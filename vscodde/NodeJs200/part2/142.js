const http = require('http');

http.createServer((req,res) => {
    //GET cookie
    if(req.headers.cookie) {
        const cookie = req.headers.cookie.sqlit(';').map(element => {
            element = element.split('=');
            return {
                name : element[0],
                value : element[1],
            };
        });
        res.end(`<h1>${JSON.stringify(cookie)}</h1>`);
    } else {
        //SET cookie
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Set-Cookie' : ['soju = grilledPork', 'bear = chicken'],
        });
        res.end(`<h1>${'쿠키 생성함'}</h1>`);
    }
}) .listen(50000, () => {
    console.log(`서버 실행중`);
})