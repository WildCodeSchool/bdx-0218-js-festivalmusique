let express = require('express');
let router = express.Router();

router.get('/', function(req, res) {
  res.render('blockcontent/nouscontacter');
});

module.exports = router;

