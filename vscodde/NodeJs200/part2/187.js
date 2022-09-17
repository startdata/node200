const request = require("request");
const cheerio = require("cheerio");

const url = "http://example.com";
const iconv = require("iconv-lite");

let title;
const arrayTitle = [];

const parse = (decodeResult) => {
  const $ = cheerio.load(decodeResult);
  const titles = $("d1.sphoto1").find("a");

  for (let i = 0; i < titles.length; i++) {
    title = $(titles[i].text());
    arrayTitle[i] = title.trim();
  }
  console.log(arrayTitle);
};

request(
  {
    uri: url,
    method: "GET",
    encoding: null,
  },
  (err, res, body) => {
    const decodeResult = iconv.decode(body, "euc-kr");
    parse(decodeResult);
  }
);
