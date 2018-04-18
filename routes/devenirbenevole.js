let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('blockcontent/devenirbenevole');
});

router.post('/', (req, res, next) => {
	console.log(req.body.vendredi);
	console.log(req.body.samedi);
	console.log(req.body.dimanche);
})

module.exports = router;
