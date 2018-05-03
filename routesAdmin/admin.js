let express = require('express');
let router = express.Router();
let path = require("path");
let mysql = require('mysql');

// IMPORT JSON FILE
let homePageData = require('../data/homePageData');

// Submitted form values on req.body
let bodyParser = require('body-parser');

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
// affichage de la page adminHomePage
router.get( "/homePage", (req,res,next) => {
	let sqlRequest = `SELECT * from homepage;`;
	con.query(sqlRequest, function (err, results) {
		if (err) throw err;
		// results[0] is am objet with title, slogan, date props
		res.render('blockcontentAdmin/adminHomePage', { data: results[0] });
	});
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
		} else if (req.params.key === 'abonnes') {
      let selectAbonnes = 'SELECT mail from subscribers';
      con.query(selectAbonnes, function (err, rows) {
            if (err) throw err;
            res.render('blockcontentAdmin/adminAbonnes', {tableAbonnes: rows});
        });
    }
	}
})

// POST
router.post('/api/banner', upload.single('banner'), function (req, res, next) {
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


// sélection de l'artiste dans la liste des artistes - les données de l'artiste en question sont envoyées dans le formulaire de modification
router.get('/api/artiste/:id', function(req, res, next) {
	let selectArtiste = `SELECT * from artistes where kartiste = '${req.params.id}';`;
	con.query(selectArtiste, function (err, row) {
        if (err) throw err;
        res.render('includesAdmin/_formArtiste', {artiste: row[0]});
    });
});

//retour du bouton 'ajouter un artiste'
router.get('/add/artiste/', function(req, res, next) {
  res.render('includesAdmin/_formArtiste');
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
	if ((req.body.artisteName === "")||(req.body.artisteDate === "")||(req.body.artisteHeure === "")||(req.body.artisteStyle === "")) {
		res.redirect('');
	} else {
			let insertArtiste = `INSERT INTO artistes (nom, jour, heure, style, image, video, description) VALUES ('${nom}', '${jour}', '${heure}', '${style}', '${image}', '${video}', '${description}');`
			con.query(insertArtiste, function (err, results) {
        if (err) throw err;
        res.render('includesAdmin/_formArtiste', {
          insertedId: results.insertId
        });
    	});
	}
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

// suppression artiste
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

// Traitement modification Banner

router.post('/api/homePage/banner', upload.fields([]),function (req, res, next) {
	let formData = req.body;

	sqlRequestBuilder = (data) => {
		let result = []
		if ( data.bannerTitle !== '' ) {
			result.push(`title = "${req.body.bannerTitle}"`)
		}
		if ( data.bannerSlogan !== '') {
			result.push(`slogan = "${req.body.bannerSlogan}"`)
		}
		if ( data.bannerDate !== '') {
			result.push(`date = "${req.body.bannerDate}"`)
		}
		return `UPDATE homepage SET ${result.join(" ,")} ;`
	}

	con.query(sqlRequestBuilder(formData), function (err, data) {
		if(err) {
			res.render("blockcontentAdmin/adminFeedback", { alertType: `alert-danger`, status: `Les modifications n'ont pas pu être effectué suite à une erreur interne.`});
			throw err
		}
		res.render("blockcontentAdmin/adminFeedback", { alertType: `alert-success`, status: `La modification a été prise en compte` })
	})
});


module.exports = router;
