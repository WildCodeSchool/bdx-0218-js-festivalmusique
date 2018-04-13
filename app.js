var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var Accueil = require('./routes/accueil');
var Programmation = require('./routes/programmation');
var Artiste = require('./routes/artiste');
var Infospratiques = require('./routes/infospratiques');
var Devenirbenevole = require('./routes/devenirbenevole');
var Nouscontacter = require('./routes/nouscontacter');
var Billetterie = require('./routes/billetterie');
var MentionsLegales = require('./routes/mentionsLegales');
var CGV = require('./routes/cgv');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', Accueil);
app.use('/programmation', Programmation);
app.use('/artiste', Artiste);
app.use('/infos-pratiques', Infospratiques);
app.use('/devenir-benevole', Devenirbenevole);
app.use('/nous-contacter', Nouscontacter);
app.use('/billetterie', Billetterie);
app.use('/mentions-legales', MentionsLegales);
app.use('/conditions-generales-de-vente', CGV);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
