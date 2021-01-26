const express = require("express");
const ejs = require("ejs");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const session = require("express-session");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(process.env.URL
    , {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(function() {
      console.log("Successfully Connected to MongoServer");
    });

    const connection = mongoose.connection;

  let mongoStore = new mongodb_store({
  mongooseConnection: connection,
  collection: "sessions"
})

app.set("view engine", "ejs");
app.use(express.static("public"));





app.use(session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    store: mongoStore,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24
    },
    // cookie valid for one day
  }));
// passport init
const passportInit = require("./app/config/passport")
passportInit(passport)
app.use(passport.initialize())
app.use(passport.session())


// global middleware
app.use((req, res, next) => {
    res.locals.session = req.session
    res.locals.user = req.user
    next()
  })




// routes file
require("./routes/web.js")(app)



const server = app.listen(process.env.PORT||6000,function(){
    console.log("Server is up on port 6000");
})