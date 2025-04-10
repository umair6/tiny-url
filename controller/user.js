
const {v4: uuidV4} = require("uuid");
const{USER} = require("../models/user");
const {setUser} = require("../service/auth");


const signUpNewUser = async (req, res) => {
    console.log(req.body);

    const {username, email, password} = req.body;

    const user = await USER.create({ "username" : username, "password" : password, "email" : email});
    // redirect to login page
    if (!user)
    {
        res.render("signup.ejs", {error : "Something went wrong"});
    }
    else{
        res.redirect("/SignIn");
    }

}

const signInNewUser = async (req, res) => {
    console.log(req.body);
    const {email, password} = req.body;

    const user = await USER.findOne({"email" : email, "password" : password});

    if (!user)
    {
        console.log("user not found");
        res.render("signin.ejs", {error : "Something wrong with user name or password"});
    }
    else
    { 
        const sessionID = uuidV4();
        setUser(sessionID, user);
        res.cookie("uid", sessionID, {maxAge: 1000 * 120});
        res.redirect("/");
    }

}



module.exports = {signUpNewUser, signInNewUser};
