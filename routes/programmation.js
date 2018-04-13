let express = require('express');
let router = express.Router();
let mysql = require('mysql');

let con = mysql.createConnection({
 		host: "127.0.0.1",
 		user: "root",
 		password: "root",
 		database: "projet2"
});

let select = 'SELECT * from artistes';
let listVendredi = 'SELECT * from artistes where jour = vendredi';

router.get('/', (req, res, next) => {
  	con.query(select, function (err, rows) {
        if (err) throw err;
        console.log("insert done");
        res.render('blockcontent/programmation', {tableArtistes: rows});
    });
})

router.get('/', (req, res, next) => {
  	con.query(listVendredi, function (err, rows) {
        if (err) throw err;
        console.log("insert done");
        res.render('blockcontent/programmation', {tableArtistes: rows});
    });
})
module.exports = router;
