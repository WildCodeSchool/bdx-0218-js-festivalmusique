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

// affichage de la liste des artistes
router.get('/artiste', function(req, res, next) {
	let selectArtistes = 'SELECT kartiste, nom from artistes';
	con.query(selectArtistes, function (err, rows) {
        if (err) throw err;
        res.render('blockcontentAdmin/adminArtiste', {tableArtistes: rows});
    });
});

// sélection de l'artiste dans la liste des artistes - les données de l'artiste en question sont envoyées dans le formulaire de modification/suppression
router.get('/api/artiste/:id', function(req, res, next) {
	let selectArtiste = `SELECT * from artistes where kartiste = '${req.params.id}';`;
	con.query(selectArtiste, function (err, row) {
        if (err) throw err;
        res.render('includesAdmin/_formArtiste', {artiste: row[0]});
    });
});

// ajouter un artiste
router.post('/api/artiste', function(req, res, next) {
	const nom = req.body.artisteName;
	const jour = req.body.artisteDate;
	const heure = req.body.artisteHeure;
	const style = req.body.artisteStyle;
	const image = req.body.artisteImage;
	const videoYoutube = req.body.artisteYoutube;
	const video = videoYoutube.substr(videoYoutube.length - 11, 11);
	const description = req.body.artisteDescription;

	let insertArtiste = `INSERT INTO artistes (nom, jour, heure, style, image, video, description) VALUES ('${nom}', '${jour}', '${heure}', '${style}', '${image}', '${video}', '${description}');`
	con.query(insertArtiste, function (err, row) {
        if (err) throw err;
        res.render('includesAdmin/_formArtiste');
    });
});

// modification artiste
router.put('/api/artiste/:id', function(req, res, next) {
	const id = req.params.id;
	const nom = req.body.artisteName;
	const jour = req.body.artisteDate;
	const heure = req.body.artisteHeure;
	const style = req.body.artisteStyle;
	const image = req.body.artisteImage;
	const videoYoutube = req.body.artisteYoutube;
	const video = videoYoutube.substr(videoYoutube.length - 11, 11);
	const description = req.body.artisteDescription;

	let updateArtiste = `UPDATE artistes SET nom='${nom}', jour='${jour}', heure='${heure}', style='${style}', image='${image}', video='${video}', description='${description}' WHERE kartiste = '${id}';`
	con.query(updateArtiste, function (err, row) {
        if (err) throw err;
        res.render('includesAdmin/_formArtiste');
    });
});

// supression artiste
router.post('/api/artiste/:id', function(req, res, next) {
	const id = req.params.id;
	let deleteArtiste = `DELETE FROM artistes WHERE kartiste = '${id}';`
	con.query(deleteArtiste, function (err, row) {
        if (err) throw err;
        res.render('includesAdmin/_formArtiste');
    });
});

module.exports = router;
