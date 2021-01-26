const express = require("express");
const ejs = require("ejs");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));


// passport init


// routes file
require("./routes/web.js")(app)



const server = app.listen(process.env.PORT||6000,function(){
    console.log("Server is up on port 6000");
})