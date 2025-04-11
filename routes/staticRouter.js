const express = require('express');
const staticRoute = express.Router();
const {URL} = require("../models/url");
const { restrictTo } = require('../middlewear/auth');


staticRoute.get('/', restrictTo(["Normal"]) , async (req, res) => {
    const allURls = await URL.find({createdBy: req.user._id});
    return res.render('home.ejs', {urls : allURls});
});

staticRoute.get('/Admin', restrictTo(["Admin"]) , async (req, res) => {
    const allURls = await URL.find({});
    return res.render('admin.ejs', {urls : allURls});
});

staticRoute.route('/SignUp').get(async (req, res) => {
    return res.render('signup.ejs');
});

staticRoute.route('/Login').get(async (req, res) => {
    return res.render('Login.ejs');
});



module.exports = staticRoute;