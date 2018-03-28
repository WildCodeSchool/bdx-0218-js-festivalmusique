let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
  res.render('infosPratiques', { titleIP: 'Ici apparaitront toutes les informations par rapportau festival !' });
});

module.exports = router;
