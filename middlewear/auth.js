const {getUser} = require("../service/auth")
const authenticate = (req, res, next) => {
    console.log("authenticating");

    const jwt = req.cookies?.jwt;
    if (!jwt) return res.redirect("/Signin");

    const user = getUser(jwt);
    if (!user) return res.redirect("/Signin");

    console.log("authenticated");
    req.user = user;
    next();
}

const checkAuth = (req, res, next) => {
    const jwt = req.cookies?.jwt;
    const user = getUser(jwt);
    req.user = user;
    next();
}

module.exports = {authenticate, checkAuth};