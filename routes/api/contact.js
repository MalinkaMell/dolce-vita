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

  /* const smtpTransport = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "fred.rempel51@ethereal.email",
      pass: "HkZ68kqQkD6EcwshZj"
    }
  }); */

  smtpTransport.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take messages');
    }
  });

  const mailOptions = {
    to: process.env.email,
    subject: "This is an email submitted from contact form on your website.",
		text: "Subject: " + req.body.subject + "\n" + "From: " + req.body.name + "\n" + "Email: " + req.body.email + "\n" + "Message: " + req.body.message
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.json({msg: "fail"})
    } else {
      console.log(`Message sent: ${response.messageId}`);
      res.json({msg: "success"})
    }
  });
});

module.exports = router;