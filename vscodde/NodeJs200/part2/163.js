const express = require('express');
const app = express();

app.use((req, res,next)=> {
    console.log('첫번째 미들웨어');
    req.user1 = 'name1';
    next();
})

app.use((req,res,next) => {
    console.log('두번째 미들웨어');
    req.user2 = 'name2';
    next();
})

app.use((req,res,next) => {
    console.log('세번째 미들웨어');
    res.writeHead('200', {'Content-Type': 'text/html;charset=uft8'})

    res.write(`<div><p>${req.user1}</p></div>`)
    res.write(`<div><p>${req.user2}</p></div>`)
    res.end(`<div>express server response</div>`)
})

app.listen(3000, () => {
    console.log(`server run`);
})