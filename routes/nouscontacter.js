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

router.get('/', function(req, res) {
  res.render('blockcontent/nouscontacter');
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
    subject: `${req.body.sujet}`, // Sujet
    html:   `'<b>' nom : ${req.body.nom} / prenom : ${req.body.prenom} / message : ${req.body.message} / mail : ${req.body.mail}'</b>'`   // html body
    }, (error, response) => {
        if(error){
            console.log(error);
        }else{
            res.redirect('/nous-contacter');
        }
    });
});

module.exports = router;
