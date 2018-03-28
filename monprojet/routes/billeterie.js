var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('billeterie', { titleBillet: 'Menu, prix, et liens vers la billeterie en ligne' });
});

module.exports = router;
