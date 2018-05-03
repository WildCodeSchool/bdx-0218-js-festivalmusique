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

let status = "";

router.get('/', function(req, res) {
  res.render('blockcontent/devenirbenevole', {status});
});

router.post('/', (req, res, next) => {
  let vendredi = req.body.vendredi;
  let samedi = req.body.samedi;
  let dimanche = req.body.dimanche;
  if (vendredi == undefined) {
    vendredi = " ";
  };
  if (samedi == undefined) {
    samedi = " ";
  };
  if (dimanche == undefined) {
    dimanche = " ";
  };

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
    subject: `Demande de benevolat`, // Sujet
    html:   `NOM : ${req.body.nom} <br> PRENOM : ${req.body.prenom} <br> TELEPHONE : ${req.body.telephone} <br> MAIL : ${req.body.mail} <br> Jour(s) de disponibilité : ${vendredi}${samedi}${dimanche}`
    }, (error, response) => {
        if(error){
            res.render(error);
        } else {
            res.render('blockcontent/devenirbenevole', {status: "Demande de bénévolat envoyée avec succès"});
        }
    });
});

module.exports = router;
