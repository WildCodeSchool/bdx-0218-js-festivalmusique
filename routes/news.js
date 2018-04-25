var express = require('express');
var router = express.Router();
let mysql = require('mysql');

let con = mysql.createConnection({
	host: "sql7.freesqldatabase.com",
	user: "sql7233133",
	password: "r3AcfGXI7U",
	database: "sql7233133"
});

router.post('/apim', function(req, res) {
	  let mail = `insert into subscribers (mail) values ('${req.query.mail}');`;
    con.query(mail, function (err, rows) {
      if (err) throw err;
      res.send('');
    });
});

module.exports = router;
