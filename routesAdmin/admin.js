let express = require('express');
let router = express.Router();
let path = require("path");
let mysql = require('mysql');
let sessLog;
let toto = "";

let con = mysql.createConnection({
 		host: "sql7.freesqldatabase.com",
 		user: "sql7233133",
 		password: "r3AcfGXI7U",
 		database: "sql7233133"
});

let adminID = `select * from admin;`;

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views/blockcontentAdmin', 'adminLogin.html'));
});

coucou = (arg) => {
	toto = arg;
	console.log("toto in coucou : ", toto);
}
bonjour = () => {
	console.log("toto in bonjour : ", toto);
}
router.post('/', (req, res, next) => {
	con.query(adminID, function (err, result) {
    if (err) throw err;
		if ((req.body.ident === result[0].id)&&(req.body.password===result[0].password)) {
			req.session.login = "admin";
			res.render('blockcontentAdmin/adminHP');
		} else {
			res.redirect('/admin');
		}
  });
});

router.get('/:key', (req, res, next) => {
	if (req.session.login != "admin") {
		res.send('error log session admin');
	} else {
		res.render(`blockcontentAdmin/${req.params.key}`);
	}
})

module.exports = router;
