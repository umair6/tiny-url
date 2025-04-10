const express = require('express');
const staticRoute = express.Router();
const {URL} = require("../models/url")


staticRoute.route('/').get(async (req, res) => {
    if (!req.user) return res.redirect('/SignIn');
    const allURls = await URL.find({createdBy: req.user._id});
    return res.render('home.ejs', {urls : allURls});
});


staticRoute.route('/SignUp').get(async (req, res) => {
    return res.render('signup.ejs');
});

staticRoute.route('/SignIn').get(async (req, res) => {
    return res.render('signin.ejs');
});



module.exports = staticRoute;