var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('accueil', { titleAccueil: 'Bienvenu sur le nouveau site de FestiZik !' });
});

module.exports = router;
