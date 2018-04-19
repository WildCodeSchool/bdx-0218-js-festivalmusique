let express = require('express');
let router = express.Router();
let path = require("path");
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
  res.sendFile(path.join(__dirname, '../views/blockcontentAdmin', 'adminLogin.html'));
  // res.render('blockcontentAdmin/adminHP');
});

router.post('/', (req, res, next) => {
	con.query(adminID, function (err, result) {
      if (err) throw err;
			if ((req.body.ident === result[0].id)&&(req.body.password===result[0].password)) {
				res.render('blockcontentAdmin/adminHP');
			} else {
				res.redirect('/admin');
			}
  });
});

module.exports = router;
