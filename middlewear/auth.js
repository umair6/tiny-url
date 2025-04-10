const auth = require("../service/auth")
const authenticate = (req, res, next) => {
    console.log("authenticating");

    const uid = req.cookies?.uid;
    if (!uid) return res.redirect("/Signin");

    const user = auth.getUser(uid);
    if (!user) return res.redirect("/Signin");

    console.log("authenticated");
    req.user = user;
    next();
}

const checkAuth = (req, res, next) => {
    const uid = req.cookies?.uid;
    const user = auth.getUser(uid);
    req.user = user;
    next();
}

module.exports = {authenticate, checkAuth};