var express = require('express');
var router = express.Router();
let mysql = require('mysql');

let con = mysql.createConnection({
 		host: "sql7.freesqldatabase.com",
 		user: "sql7233133",
 		password: "r3AcfGXI7U",
 		database: "sql7233133"
});

let adminID = `select * from admin;`

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('blockcontent/adminLogin');
});

router.post('/', (req, res, next) => {
	const ident = req.body.ident;
	const pwd = req.body.password;
	con.query(adminID, function (err, result) {

      if (err) throw err;

			if ((ident === result[0].id)&&(pwd===result[0].password)) {
				console.log('les ID sont bons');
				res.render('blockcontent/adminHP');
			} else {
				console.log('les ID sont foireux');
				res.redirect('/admin');
			}
  });
});

module.exports = router;
