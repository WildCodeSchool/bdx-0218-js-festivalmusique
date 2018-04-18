let express = require('express');
let router = express.Router();
let mysql = require('mysql');

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

	  let insert = `INSERT INTO contact (nom, prenom, mail, sujet, message) VALUES ('${req.body.nom}', '${req.body.prenom}', '${req.body.mail}', '${req.body.sujet}', '${req.body.message}');`;

	  if ((req.body.nom === "")||(req.body.prenom === "")||(req.body.mail === "")||(req.body.sujet === "")||(req.body.message === "")) {	
	  	res.redirect('');
	  } else {
	  	  con.query(insert, function (err, result) {
	        if (err) throw err;
    		});

	  	res.redirect('');
	  }
});

module.exports = router;
