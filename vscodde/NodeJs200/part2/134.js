const http = require('http');

const server = http.createServer();

//이벤트 연결
server.on('request', ()=> {
    console.log('Request');
});

server.on('connection', ()=> {
    console.log('Connection');
})

server.on('close', () => {
    console.log('Close');
})

server.listen(50000, () => {
    console.log('서버가 동작 중입니다, http://127.0.0.1:50000');
})

//웹서버 종료

const testClose = function () {
    server.close();
    console.log('서버가 종료되었습니다, http://127.0.0.1:50000');
}

//강제 서버 종료
setTimeout(testClose, 100000);