var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//I think this is the Middleware
var indexRouter = require('./routes/index');
var adminsRouter = require('./routes/admins');
var locationRouter = require('./routes/location-traces');
var reopeningsRouter = require('./routes/reopenings');
var exposeRouter = require('./routes/expose');
var locationOutbreakRouter = require('./routes/location-outbreak');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use(exposeRouter);
app.use(adminsRouter);
app.use(locationRouter);
app.use(locationOutbreakRouter);
app.use(reopeningsRouter);
app.use(bodyParser.json());

// CONNECT TO MONGO DB
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = require('./db');
db.connect(() => {
  app.listen(process.env.DB_PORT || 5555, function () {
    console.log(`Listening`);
  });
});

// this should prevent Not found when refreshing or manually typing url
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
