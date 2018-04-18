var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/accueil', function(req, res) {
  res.render('blockcontentAdmin/adminHP');
});

module.exports = router;
