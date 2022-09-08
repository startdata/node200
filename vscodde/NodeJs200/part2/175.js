const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gmail@gmail.com",
    pass: "password",
  },
});

const mailOptions = {
  from: "gamil@gmail.com",
  to: "gmail@gmail.com",
  subject: "Hello attachment",
  html: "<h1>Hello attachment</h1>",
  attachments: [
    {
      filename: "attachment_test.xlsx",
      path: "attachment_test.xlsx",
    },
  ],
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`message sent: ${info.response}`);
    console.log(mailOptions.attachments);
  }
  transporter.close();
});
