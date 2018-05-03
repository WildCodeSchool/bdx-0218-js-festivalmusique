var express = require('express');
var router = express.Router();
let mysql = require('mysql');

// CONNECTION MYSQL
let connection = mysql.createConnection({
	host: "sql7.freesqldatabase.com",
	user: "sql7233133",
	password: "r3AcfGXI7U",
	database: "sql7233133"
});

// IMPORT JSON FILE 

/* GET home page. */
router.get('/', function(req, res) {
	delete req.session.login;
	// REQ SQL HOMEPAGE
	let sqlRequest = `SELECT * from homepage;`;
	connection.query(sqlRequest, function (err, results) {
		if (err) throw err;
		// festivalBanner is am objet with title, slogan, date props
		res.render('blockcontent/accueil', { festivalBanner: results[0] });
	});
});

module.exports = router;
