let express = require('express');
let router = express.Router();
const nodemailer = require("nodemailer");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('blockcontent/devenirbenevole');
});

router.post('/', function(req, res) {
    let smtpTransport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "zikfesti2018@gmail.com",
            pass: "ZikFesti2018@@@"
        }
    });

    smtpTransport.sendMail({
        from: req.body.prenom,
        to: "zikfesti2018@gmail.com",
        subject: req.body.nom, // Sujet
        text: req.body.mail, // plaintext body
        html: '<b>' + req.body.mail + '</b>' // html body
    }, (error, response) => {
        if(error){
            console.log(error);
        }else{
            console.log("Message sent");
        }
    });
});

module.exports = router;
