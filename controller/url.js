
const {URL} = require('../models/url');
const {PORT} = require('../consts');



async function shortenURL(req, res){
    const url = req.body.url;
    if (!url){
        return res.status(400).json({error: "url is required"});
    }
    const { nanoid } = await import('nanoid');
    const shortID = nanoid(6);
    await URL.create({
        "longUrl" : url,
        "urlCode" : shortID,
        "clicks" : [],
    });
    return res.status(201).json({
        "shortURL" : `http://localhost:${PORT}/${shortID}`,
        "longURL" : url});
}

async function showAnalytics(req, res){
    await URL.find({}).then((data) => {
        return res.status(200).json(data);
    });
};

async function openURL(req, res){
    const shortCode = req.params.urlCode;
    if (!shortCode){
        return res.status(400).json({error: "urlCode is required"});
    }    
    const url = await URL.findOneAndUpdate({urlCode : shortCode}, {$push : {"clicks" : {"timestamp": Date.now()}}});
    if (url){
        res.redirect(url.longUrl);
    }
    else{
        return res.status(500).json({"error": "url not found"});
    };
};



module.exports = {shortenURL, showAnalytics, openURL}