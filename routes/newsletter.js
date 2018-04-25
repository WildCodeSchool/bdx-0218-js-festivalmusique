let express = require('express');
let router = express.Router();
let mysql = require('mysql');

let con = mysql.createConnection({
	host: "sql7.freesqldatabase.com",
	user: "sql7233133",
	password: "r3AcfGXI7U",
	database: "sql7233133"
});

// ajouter un abonné
router.post('/api', function(req, res, next) {
	console.log("je suis dans le router");
	const mail = req.query.email;
	console.log("mail : ", mail);
	let insertAbonne = `INSERT INTO subscribers (mail) VALUES ('${mail}');`
	con.query(insertAbonne, function (err, row) {
        if (err) throw err;
        res.render('includes/newsletter');
    });
});
