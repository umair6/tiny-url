const express = require('express');
const cookieParser = require("cookie-parser");
const connectDB = require('./connection');
const path = require('path');
const urlRouter = require('./routes/url');
const {userRouter} = require('./routes/user');
const {authenticate, checkAuth} = require('./middlewear/auth');
const staticRoute = require ("./routes/staticRouter");
const app = express();
const {PORT, DBURL, DBName, SERVERURL} = require('./consts');

connectDB(`${DBURL}/${DBName}`).then( ()  => {
    console.log('DB connected');
});

app.set("view engine", "ejs");
app.set("views", path.resolve('./views'));

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());

app.use("/url", authenticate, urlRouter);
app.use("/user", userRouter);
app.use("/", checkAuth, staticRoute);



app.listen(PORT, () => {
    console.log(`Server us runnging at ${SERVERURL}`)
});
