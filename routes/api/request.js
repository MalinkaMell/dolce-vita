//require('dotenv').config();
const router = require("express").Router();
const nodemailer = require("nodemailer");
require("dotenv").config();


router.post("/send", (req, res) => {
  //gmail way
  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
      user: process.env.email,
      pass: process.env.appPwd
    }
  });

  smtpTransport.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take messages');
    }
  });

  const mailOptions = {
    to: process.env.email,
    subject: "New gelato request.",
    text:
      "From: " + req.body.name + "\n" +
      "Email: " + req.body.email + "\n" +
      "Phone: " + req.body.phone + "\n" +
      "Flavors: " + req.body.flavors + "\n" +
      "Custom flavor: " + req.body.custom + "\n" +
      "Date and time: " + req.body.date + "\n" +
      "Additional comments: " + req.body.comments
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.json({ msg: "fail" })
    } else {
      console.log(`Message sent: ${response.messageId}`);
      res.json({ msg: "success" })
    }
  });
});

module.exports = router;