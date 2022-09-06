const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "gmailId@gmail.com",
    pass: "password",
  },
});

const mailOptions = {
  from: "gmailFrom@gmail.com", // send address
  to: "gmailTo@gmail.com", // list of receivers
  subject: "Hello ", // Subject line
  text: `Hello world??`,
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Message sent: ${info.response}`);
  }
  transporter.close();
});
