
const homePage = require("../app/controllers/homePageController")






function initRoutes(app){
    // homePage function and index is an method 
  app.get("/",homePage().index)
}

module.exports = initRoutes