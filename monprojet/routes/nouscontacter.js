let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
  res.render('nouscontacter', { titleContact: 'rubrique de contact pour des informations complémentaires ou pour un message direct à l\'association organisatrice de l\'évènement' });
});

module.exports = router;

