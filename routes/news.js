var express = require('express');
var router = express.Router();

router.post('/newsletter', (req, res, next) => {
	console.log(req.query.mail);
});

module.exports = router;
