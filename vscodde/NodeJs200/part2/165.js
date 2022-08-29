const express = require('express')
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/login`));

app.use((req,res) => {
    const userId = req.body.userid || req.query.userid;
    const userPassword = req.body.password || req.query.password;

    res.writeHead('200', {'Content-Type': 'text/html;charset=utf8'});
    res.write('<h1>Login ID 와 pw 결과 값 입니다.</h1>');
    res.write(`<div><p>${userId}</p></div>`)
    res.write(`<div><p>${userPassword}</p></div>`)
    res.end(JSON.stringify(req.body, null,2));
})

app.listen(3000, () => {
    console.log(`server`);
})