const express = require('express');

const app = express();

app.use((req,res) => {
    const agent = req.header('User-Agent');
    const paramName= req.query.name;
    const browerChrome = 'Hello Chrome';
    const browerOthers = 'Hello Others';

    console.log(req.headers);
    console.log(req.baseUrl);
    console.log(req.hostname);
    console.log(req.protocol);

    if(agent.toLowerCase().match(/chrome/)){
        res.write(`<div><p>${browerChrome}</p></div>`);
    } else{
        res.write(`<div><p>${browerOthers}</p></div>`)
    }
    res.write(`<div><p>${agent}</p></div>`)
    res.write(`<div><p>${paramName}</p></div>`)
    res.end()
})

app.listen(4000, ()=> {
    console.log('server run');
})