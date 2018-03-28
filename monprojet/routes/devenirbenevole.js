let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('devenirbenevole', { titleDB: 'informations sur le incriptions, les besoins et un formulaire de contact adapté' });
});

module.exports = router;
