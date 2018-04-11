let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
  res.render('blockcontent/infosPratiques');
});

router.get('/comment-venir', function(req, res, next) {
  res.render('blockcontent/commentVenir');
});

router.get('/accessibilite', function(req, res, next) {
  res.render('blockcontent/accessibilite');
});

router.get('/developpement-durable', function(req, res, next) {
  res.render('blockcontent/Developpement-durable');
});

router.get('/hebergement-restauration', function(req, res, next) {
  res.render('blockcontent/hebergement-restauration');
});

module.exports = router;

