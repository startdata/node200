const request = require('request');

request({
    url: 'http://www.google.com',
    method: 'GET',
}, (err,res,body) => console.log(body))