// const butVendredi = document.querySelector(".vendredi");

// request = (cb) => {

//     var xhr = getXMLHttpRequest();

//     xhr.onreadystatechange = function() {

//         if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
//             cb(xhr.responseText);
//         }
//     };

//     // xhr.open("GET", "XMLHttpRequest_getString.php?Nick=" + nick + "&Name=" + name, true);
//     xhr.open("GET", "../../routes/programmation.js?jour=vendredi")
//     xhr.send(null);
// }

let express = require('express');
let router = express.Router();
let mysql = require('mysql');

let con = mysql.createConnection({
 		host: "127.0.0.1",
 		user: "root",
 		password: "root",
 		database: "projet2"
});

let listVendredi = 'SELECT * from artistes where jour = vendredi';

router.get('/', (req, res, next) => {
  	con.query(listVendredi, function (err, rows) {
        if (err) throw err;
        console.log("insert done");
        res.render('blockcontent/programmation', {tableArtistes: rows});
    });
})

module.exports = router;
