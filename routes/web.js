const passport = require("passport")
const homePage = require("../app/controllers/homePageController")






function initRoutes(app){
    // homePage function and index is an method 
  app.get("/",homePage().index)
  app.get("/signin",homePage().signin)
}

module.exports = initRoutes