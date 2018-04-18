// let express = require('express');
// let router = express.Router();
// let mysql = require('mysql');

// let con = mysql.createConnection({
//  		host: "sql7.freesqldatabase.com",
//  		user: "sql7233133",
//  		password: "r3AcfGXI7U",
//  		database: "sql7233133"
// });

// router.get('/:name(\\w+)', (req, res, next) => {
// 	console.log("valeur de param : ", req.params.name);
// 	let select = `SELECT * from artistes where nom = '${req.params.name}'`;
// 	con.query(select, function (err, rows) {
//       if (err) throw err;
//       res.render('blockcontent/artiste', {toto: rows});
//   });
// })

// module.exports = router;
