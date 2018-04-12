let express = require('express');
let router = express.Router();

/* GET artist page. */
router.get('/', function(req, res) {
  res.render('blockcontent/mentionsLegales');
});

module.exports = router;
