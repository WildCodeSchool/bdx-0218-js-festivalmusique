let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('programmation', { programmation: 'informations sur les artistes, les horaires et les jours de passages' });
});

module.exports = router;
