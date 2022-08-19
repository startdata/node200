const crawier = require('./crawler');
const cheerio = require('cheerio');
const fs = require('fs');

const parse = (decodeResult) => {
    const $ = cheerio.load(decodeResult);
    const titles = $('h3.r').find('a');
    titles.each((index, element) => {
        const title = $(element).text();
        console.log(title);
        fs.appendFile('./titles.txt', `${title}\n`)
    });
};

crawier.crawl(parse)({q:'샤로수 길 맛집햐'})