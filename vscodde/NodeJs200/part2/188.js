const request = require("request");
const cheerio = require("cheerio");
const nodemailer = require("nodemailer");

const url = "http://example.com";
const iconv = require("iconv-lite");

const date = new Date();

let title;
const arrayTitle = [];

function sendMail(arHeadline) {
  const transpoter = nodemailer.createTestAccount({
    service: "gmail",
    auth: {
      user: "gmail@gmail.com",
      pass: "password",
    },
  });

  const mailOptions = {
    from: "gmail@gmail.com",
    to: "gmail@gmail.com",
    subject: `${date.toLocaleDateString()} Today News`,
    html: `${(<h1>과학</h1>)}`,
  };

  transpoter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`${info.response}`);
    }
    transpoter.close();
  });
}

const parse = (decodeResult) => {
  const $ = cheerio.load(decodeResult);
  const titles = $("d1.sphoto1").find("a");

  for (let i = 0; i < titles.length; i++) {
    title = $(titles[i]).text();
    arrayTitle[i] = title.trim();
  }
  return arrayTitle;
};

request(
  {
    uri: url,
    method: "GET",
    encoding: null,
  },
  (err, res, body) => {
    const decodeResult = iconv.decode(body, "euc-kr");
    const arTitles = parse(decodeResult);
    sendMail(arTitles);
  }
);
