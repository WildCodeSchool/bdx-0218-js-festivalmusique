let express = require('express');
let router = express.Router();
let path = require("path");
let mysql = require('mysql');

let con = mysql.createConnection({
 		host: "sql7.freesqldatabase.com",
 		user: "sql7233133",
 		password: "r3AcfGXI7U",
 		database: "sql7233133"
});

router.get('/abonnes', (req, res, next) => {
  res.render('adminAbonnes', {title: 'Liste des abonnés'});
});
