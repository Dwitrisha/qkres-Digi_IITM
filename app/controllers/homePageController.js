function homePageController(){
    return{
        index(req,res){
            res.render("index")
        },
        signin(req,res){
            res.render("signin")
        }

    }
}

module.exports = homePageController