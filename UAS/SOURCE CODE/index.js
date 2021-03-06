const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require("connect-flash");
const passport = require("passport");

const app = express();

const db = require('./public/js/db.js');

// passport
require('./public/js/passport')(passport);

// set the view engine to ejs
app.set('view engine', 'ejs');

// body-parser to parse request body
app.use(bodyParser.urlencoded());

// static files
app.use(express.static('public'));

// express session middleware
app.use(
  session({
    secret: "rahasia",
    resave: true,
    saveUninitialized: true,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//connect flash
app.use(flash());

// global var
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

// place all styles block in the layout at the head
app.set("layout extractStyles", true)

// place all scripts block in the layout at the end
app.set("layout extractScripts", true)

// routes
const index = require('./routes/index');
const user = require('./routes/user');
const upload = require('./routes/upload');
const collect = require('./routes/collection');
const taspria = require('./routes/taspria');
const taswanita = require('./routes/taswanita');

app.use('/', index);
app.use('/user', user);
app.use('/upload', upload);
app.use('/collection', collect);
app.use('/taspria', taspria);
app.use('/taswanita', taswanita);

let PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log('Server runs at port 3000...');
