var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connectDB = require('./config/db');
const passport = require('passport');
const cors = require('cors');
require('dotenv').config();
const errorHandler = require("./middleware/errorHandler");

connectDB();

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var authRouter = require('./routes/auth');
var catalogRouter = require('./routes/catalog');

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  next();
});

app.use(
  cors({
    credentials: true,
    origin: [],
    allowedHeaders: ["Origin, X-Requested-With, Content-Type, Accept"],
  })
);
//app.use(cors())
app.set("trust proxy", 1);

app.use(require("./config/session.js"));
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', express.static('./public'));
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/movies', catalogRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

/**
 * ========== SERVER ==============
 */

 const PORT = process.env.PORT || 4000;
 const NODE_ENV = process.env.NODE_ENV || "development";

 app.listen(PORT, function () {
   console.log(`Express listening on PORT ${PORT} in ${NODE_ENV} mode`);
 });
