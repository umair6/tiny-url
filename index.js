const express = require('express');
const connectDB = require('./connection');
const {shortenURL, showAnalytics, openURL} = require ('./controller/url');
const urlRouter = require('./routes/url');
const app = express();
const {PORT, DBURL, DBName} = require('./consts');

connectDB(`${DBURL}/${DBName}`).then( ()  => {
    console.log('DB connected');
});

app.use(express.urlencoded({extended : false}));
app.use("/", urlRouter);
app.listen(PORT, () => {
    console.log(`Server us runnging at http://localhost:${PORT}`)
});
