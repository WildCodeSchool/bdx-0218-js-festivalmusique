let express = require('express');
let router = express.Router();
let path = require("path");
let mysql = require('mysql');

// UPLOAD DE FICHIER 
const multer = require('multer');
const upload = multer({ dest: 'tmp/' });
const fs = require('fs');

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


// UPLOAD
router.get('/upload', (req, res, next) => {
	res.render('blockcontentAdmin/adminUpload');
	next();
});

// ROUTE pour POST
router.post('/uploaddufichier', upload.single('monfichier'), function (req, res, next) {
	// verification du type et de la taille du formulaire
	if (req.file.mimetype === 'image/png' && req.file.size < 3145728) {
		fs.rename(req.file.path, 'public/images/homepage.png', function (err) {
			if (err) {
				// res.send("problème durant l'enregistrement du fichier");
				//res.render("blockcontentAdmin/adminUploadFeedback", { status: "problème durant l'enregistrement du fichier"})
				res.render('blockcontentAdmin/adminUpload', { status: "problème durant l'enregistrement du fichier" })
			} 
			else {
				res.render('blockcontentAdmin/adminUpload', { status: "l'upload a fonctionné"});
			}
		});
	}
	else if (req.file.mimetype != 'image/png') {
		res.render('blockcontentAdmin/adminUpload', { status: "erreur ! ce fichier n'est pas un png" })
		
	}

	else {
		res.render('blockcontentAdmin/adminUpload', { status: "erreur ! ce fichier est trop volumineux" })
	}

});

// FEEDBACK UPLOAD 
router.post("uploaddufichierTEST", function (req, res, next) {
	res.send("adminUploadFeedback", { status: "BOB"})
})


//affichage de la liste des artistes 
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
router.post('/artiste', function(req, res, next) {
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
        res.render('includesAdmin/_formArtiste', {status: 'Artiste ajouté avec succès'});
    });
});



module.exports = router;
