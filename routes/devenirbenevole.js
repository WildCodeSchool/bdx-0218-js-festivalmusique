let express = require('express');
let router = express.Router();
let mysql = require('mysql');
const nodemailer = require("nodemailer");

let con = mysql.createConnection({
 		host: "sql7.freesqldatabase.com",
 		user: "sql7233133",
 		password: "r3AcfGXI7U",
 		database: "sql7233133"
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('blockcontent/devenirbenevole');
});

router.post('/', (req, res, next) => {
// Création de la méthode de transport de l'email
const smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    host:'smtp.gmail.com',
    port: 465,
    auth: {
        user: "zikfesti2018@gmail.com",
        pass: "ZikFesti2018@@@"
    }
});

smtpTransport.sendMail({
  from: `${req.body.mail}`, // Expediteur
  to: "zikfesti2018@gmail.com", // Destinataires
  subject: `${req.body.mail}`, // Sujet
  html:   `'<b>' nom : ${req.body.name} / prenom : ${req.body.prenom} / telephone : ${req.body.phone} / mail : ${req.body.mail}'</b>'`   // html body
  }, (error, response) => {
      if(error){
          console.log(error);
      }else{
          res.redirect('/nous-contacter');
      }
  });
});



module.exports = router;
