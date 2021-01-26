

function homePageController(){
    return{
        index(req,res){
            res.render("index")
        }

    }
}

module.exports = homePageController