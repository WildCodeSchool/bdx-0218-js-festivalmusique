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

	  /*let insert = `INSERT INTO contact (nom, prenom, mail, sujet, message) VALUES ('${req.body.nom}', '${req.body.prenom}', '${req.body.mail}', '${req.body.sujet}', '${req.body.message}');`;

	  if ((req.body.nom === "")||(req.body.prenom === "")||(req.body.mail === "")||(req.body.sujet === "")||(req.body.message === "")) {
	  	res.redirect('');
	  } else {
	  	  con.query(insert, function (err, result) {
	        if (err) throw err;
    		});
	  	res.redirect('');
	  }*/

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
    from: req.body.nom, // Expediteur
    to: "zikfesti2018@gmail.com", // Destinataires
    subject: req.body.sujet, // Sujet
    text: req.body.message + req.body.prenom, // plaintext body
    html: '<b>' + req.body.message + '</b>' // html body
    }, (error, response) => {
        if(error){
            console.log(error);
        }else{
            console.log("Message envoyé: " + response.message);
        }
    });
});

module.exports = router;
