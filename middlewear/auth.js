

const {getUser} = require("../service/auth")

function checkAutherization(req, res, next) {
    
    const authorisationHeader = req.cookies?.token;
    req.user = null;
    if (authorisationHeader == null) next();
    const authToken = authorisationHeader;
    req.user = getUser(authToken);;
    next();
}


function restrictTo(roles = []) {
    return (req, res, next) => {
        if (req.user == null) return res.redirect("/Signin");
        if (!roles.includes(req.user.role)) return res.render("Login.ejs", {error : "You are not allowed to access this page"});
        next();
    };
}
module.exports = {checkAutherization, restrictTo};