require("dotenv").config();
const nodemailer = require("nodemailer");
const search = require("../API/search.js");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

// let mail = {
// from: 'weseekps@gmail.com', // sender address
// to: "hendisleem@gmail.com", // list of receivers
// subject: "Hello ✔", // Subject line
// text: "Hello world? Naaaaaaah", // plain text body
// html: "<b>Hello world?</b>" // html body
// };

// transporter.sendMail(mail, (err, mail) => {
//     if (err) {
//         console.log("err in sending email >>>>>>>>>>> ", err);
//     } else {
//         console.log("email is sent !!!!!");
//     }
// })
export default function sendMail(compID, post) {
  search.getFollowersE(compID, emails => {
    let mail = {
      from: "weseekps@gmail.com", // sender address
      to: emails + ", hendisleem@gmail.com", // list of receivers
      subject: "FINALLY posted ✔ ", // Subject line
      text: "a new post has been added! grab the chance ^_^", // plain text body
      html: `<h3>${post.description} >>>>> ${post.link}</h3>` // html body
      //   attachments: [{filename: 'me.jpg', path: '../me.jpg'}]
    };
    transporter.sendMail(mail, (err, mail) => {
      if (err) {
        console.log("err in sending email >>>>>>>>>>> ", err);
      } else {
        console.log("email is sent wow !!!!!");
      }
    });
  });
}

let pst = {
  id: 1,
  comId: 39,
  title: "Perferendis temporibus voluptas.",
  description:
    "Ea eligendi maxime illo sed voluptatem rerum ut nulla tempore. Molesti...",
  deadLine: "2020-08-18T05:44:12.355+00:00",
  major: "Medicine",
  logo: "http://lorempixel.com/640/480/business",
  type: "jop",
  archived: false,
  read: true,
  link: "https://www.google.com/"
};
sendMail(8, pst);
