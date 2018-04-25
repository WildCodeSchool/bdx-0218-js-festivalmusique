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

// affichage page login
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views/blockcontentAdmin', 'adminLogin.html'));
});

// redirection après connexion
router.post('/', (req, res, next) => {
  let adminID = `select * from admin;`;
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

// garder la session active

router.get('/:key', (req, res, next) => {
	if (req.session.login != "admin") {
		res.send('error log session admin');
	} else {
		if (req.params.key === 'homePage') {
			res.render('blockcontentAdmin/adminHomePage', { bodyClass: 'adminHomePage'});
		} else if (req.params.key === 'artiste') {
				let selectArtistes = 'SELECT kartiste, nom from artistes';
				con.query(selectArtistes, function (err, rows) {
        		if (err) throw err;
        		res.render('blockcontentAdmin/adminArtiste', {tableArtistes: rows});
    		});			
		}
	}
})

// UPLOAD DE FICHIER
// router.get('/homePage', (req, res, next) => {
// 	res.render('blockcontentAdmin/adminHomePage');
// 	next();
// });

// POST
router.post('/api/banner', upload.single('banner'), function (req, res, next) {
	// verification du type et de la taille du formulaire
	if (req.file.mimetype === 'image/png' && req.file.size < 3145728) {
		fs.rename(req.file.path, 'public/images/homepage.png', function (err) {
			if (err) {
				res.render('blockcontentAdmin/adminFeedback', { alertType: `alert-danger`, status: "Problème durant le téléchargement du fichier" })
			}
			else {
				res.render('blockcontentAdmin/adminFeedback', { alertType: `alert-success`, status: "Le téléchargement a fonctionné avec succès"});
			}
		});
	}
	else if (req.file.mimetype != 'image/png') {
		res.render('blockcontentAdmin/adminFeedback', { alertType: `alert-danger`, status: "Erreur ! Ce fichier n'est pas un png." })
	}
	else {
		res.render('blockcontentAdmin/adminFeedback', { alertType: `alert-danger`, status: "Erreur ! Ce fichier est trop volumineux." })
	}
});

// affichage de la liste des artistes
// router.get('/artiste', function(req, res, next) {
// 	let selectArtistes = 'SELECT kartiste, nom from artistes';
// 	con.query(selectArtistes, function (err, rows) {
//         if (err) throw err;
//         res.render('blockcontentAdmin/adminArtiste', {tableArtistes: rows});
//     });
// });

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
	let updateArtiste = `UPDATE artistes SET nom="${nom}", jour="${jour}", heure="${heure}", style="${style}", image="${image}", video="${video}", description="${description}" WHERE kartiste = "${id}";`
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
// ROUTER POUR LE POSTER PROGRAMMATION
router.post('/api/poster', upload.single('poster'), function (req, res, next) {
	if (req.file.mimetype === 'image/jpeg' && req.file.size < 1048576 ) {
		fs.rename(req.file.path, 'public/images/prog.jpeg', function (err) {
			if (err) {
				res.render('blockcontentAdmin/adminFeedback', { alertType: `alert-danger`, status: "Problème durant le téléchargement du fichier." })
			}
			else {
				res.render('blockcontentAdmin/adminFeedback', { alertType: `alert-success`, status: "Le téléchargement a fonctionné avec succès." });
			}
		});
	}
	else if (req.file.mimetype != 'image/jpeg') {
		console.log(req.file.minetype);
		
		res.render('blockcontentAdmin/adminFeedback', { alertType: `alert-danger`, status: "Erreur ! Ce fichier n'est pas un png." })
	}
	else {
		res.render('blockcontentAdmin/adminFeedback', { alertType: `alert-danger`, status: "Erreur ! Ce fichier est trop volumineux." })
	}
});
// ROUTER POUR LE CAROUSSEL
router.post('/api/caroussel', upload.array('imageCaroussel', 3), function (req, res, next) {
	let feedbackCaroussel = []
	let success = 0
	

	req.files.map( (picture, index) => {
		let numberImage = 1
		numberImage += index
		if (picture.mimetype === 'image/jpeg' && picture.size < 1048576) {
			console.log(`public/images/accueil/image${numberImage}.jpeg`);
			
			fs.rename(picture.path, `public/images/accueil/image${numberImage}.jpg`, function (err) {
				if (err) {
					feedbackCaroussel.push(`L'image numéro ${numberImage} n'a pas pu être uploadé suite à une erreur interne.`)
				}
				else {
					feedbackCaroussel.push(`Le téléchargement de l'image numéro ${numberImage} a fonctionné avec succès.`)
					success++
				}
			})
		}
		else if (picture.mimetype !== 'image/jpeg'){
			feedbackCaroussel.push(`L'image numéro ${numberImage} n'a pas pu être uploadé car l'image n'était pas un jpeg.`)
		}
		else {
			feedbackCaroussel.push(`L'image numéro ${numberImage} n'a pas pu être uploadé car l'image était trop volumineuse.`)
		}
		
		
	})	

	setTimeout(() => {
		feedbackCaroussel.map(resultat => console.log(resultat))
		
		if (success === feedbackCaroussel.length){
			res.render('blockcontentAdmin/adminMultipleFeedback', { alertType: `alert-success`, status: feedbackCaroussel })
		}
		else if (success < feedbackCaroussel.length && success != 0 ) {
			res.render('blockcontentAdmin/adminMultipleFeedback', { alertType: `alert-warning`, status: feedbackCaroussel })
		}
		else {
			res.render('blockcontentAdmin/adminMultipleFeedback', { alertType: `alert-danger`, status: feedbackCaroussel })
		}
	}, 300);
})


module.exports = router;
