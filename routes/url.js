const express = require('express');

const urlRouter = express.Router();
const {shortenURL, showAnalytics, openURL} = require ('../controller/url');
urlRouter.route('/shortenURL').post(shortenURL);
urlRouter.route('/showAnalytics').get(showAnalytics);
urlRouter.route('/:urlCode').get(openURL);
module.exports = urlRouter;