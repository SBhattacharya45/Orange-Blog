var middlewareObj = {};

middlewareObj.isLoggedIn= function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    console.log("Not Logged in");
    res.redirect("/login");
}

module.exports = middlewareObj;