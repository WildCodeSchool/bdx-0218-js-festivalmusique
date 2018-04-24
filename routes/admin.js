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
});

router.post('/', (req, res, next) => {
	const ident = req.body.ident;
	const pwd = req.body.password;
	con.query(adminID, function (err, result) {

      if (err) throw err;

			if ((ident === result[0].id)&&(pwd===result[0].password)) {
				res.render('blockcontentAdmin/adminHP');
			} else {
				res.redirect('/admin');
			}
  });
});


router.get('/artiste', function(req, res, next) {
	let selectArtistes = 'SELECT kartiste, nom from artistes';
	con.query(selectArtistes, function (err, rows) {
        if (err) throw err;
        res.render('blockcontentAdmin/adminArtiste', {tableArtistes: rows});
    });
});

router.get('/api/artiste/:id', function(req, res, next) {
	let selectArtiste = `SELECT * from artistes where kartiste = '${req.params.id}';`;
	con.query(selectArtiste, function (err, row) {
        if (err) throw err;
        console.log(row);
        res.render('includesAdmin/_formArtiste', {artiste: row[0]});
    });
});

/*router.get('/abonnes', function(req, res) {
  let selectAbonnes = `SELECT mail FROM subscribers`;
  con.query(selectAbonnes, function(req, res) {
    if (err) throw err;
    res.render('blockcontentAdmin/adminAbonnes', );
  });
});*/

module.exports = router;
