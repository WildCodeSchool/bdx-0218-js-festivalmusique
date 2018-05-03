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
    subject: `Demande de contact : ${req.body.sujet}`, // Sujet
    html:   `NOM : ${req.body.nom} <br> PRENOM : ${req.body.prenom} <br> MESSAGE : ${req.body.message} <br> MAIL : ${req.body.mail}`   // html body
    }, (error, response) => {
        if(error){
            res.render(error);
        }else{
            res.render('blockcontent/nouscontacter', {status: "Demande de contact envoyée avec succès"});
        }
    });
});

module.exports = router;
