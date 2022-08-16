const request = require('request');
const iconv = require('iconv-lite');

request({
    url: 'https://www.google.com/search',
    method: 'GET',
    qs: {q : '신사역 맛집'},
    encoding: null,
}, (err,res,body) => {
    const decodeResult = iconv.decode(body, 'euc-kr')
    console.log(decodeResult);
})