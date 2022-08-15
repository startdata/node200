const request = require('request');

request({
    url: 'https://www.google.com/search',
    method: 'GET',
    qs: {q: '신사역 맛집'},
}, (err, res, body) => console.log(body))