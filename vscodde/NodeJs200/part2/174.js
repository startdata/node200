const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "gmail@gmail.com",
    pass: "password",
  },
});

const mailOptions = {
  from: "gmail@gmail.com",
  to: "gmail@gmail.com",
  subject: "hello HTML",
  html: "<h1>hello world</h1>",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Message sent: ${info.response}`);
  }
  transporter.close();
});
