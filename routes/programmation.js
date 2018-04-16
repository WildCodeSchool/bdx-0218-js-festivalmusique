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


router.get('/', (req, res, next) => {
  	con.query(select, function (err, rows) {
        if (err) throw err;
        res.render('blockcontent/programmation', {tableArtistes: rows});
    });
})

router.get('/apij', (req, res, next) => {

    let list1 = `SELECT * from artistes`;
    let list2 = `SELECT * from artistes where jour = '${req.query.jour}';`;
    console.log(req.query.jour);
    if (req.query.jour === "") {
        con.query(list1, function (err, rows) {
            if (err) throw err;
            res.render('blockcontent/_listday', {tableArtistes: rows});
        });
    } else {
        con.query(list2, function (err, rows) {
            if (err) throw err;
            res.render('blockcontent/_listday', {tableArtistes: rows});
        });
    }
})

router.get('/apis', (req, res, next) => {

    let list1 = `SELECT * from artistes`;
    let list2 = `SELECT * from artistes where style = '${req.query.style}';`;
    console.log(req.query.style);
    if (req.query.jour === "") {
        con.query(list1, function (err, rows) {
            if (err) throw err;
            res.render('blockcontent/_listday', {tableArtistes: rows});
        });
    } else {
        con.query(list2, function (err, rows) {
            if (err) throw err;
            res.render('blockcontent/_listday', {tableArtistes: rows});
        });
    }
})

module.exports = router;
