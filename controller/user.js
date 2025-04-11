
const {v4: uuidV4} = require("uuid");
const{USER} = require("../models/user");
const {setUser} = require("../service/auth")


const signUpNewUser = async (req, res) => {
    console.log(req.body);

    const {username, email, password} = req.body;

    const user = await USER.create({ "username" : username, "password" : password, "email" : email});
    // redirect to login page
    if (!user)
    {
        return res.render("signup.ejs", {error : "Something went wrong"});
    }
    else{
        return res.redirect("/Login");
    }

}

const loginNewUser = async (req, res) => {
    console.log(req.body);
    const {email, password} = req.body;

    const user = await USER.findOne({"email" : email, "password" : password});

    if (!user)
    {
        console.log("user not found");
        return res.render("Login.ejs", {error : "Something wrong with user name or password"});
    }
    else
    { 
        console.log("user found");

        const token = setUser(user);
        res.cookie("token", token);
        return res.redirect("/");
    }
}



module.exports = {loginNewUser, signUpNewUser};
