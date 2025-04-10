const jwt = require('jsonwebtoken');
const secret = "umair123";




function setUser(user) {
    if (!user) return null;
    const userData = { "_id" : user._id, "role" : user.role};
    const token = jwt.sign(userData, secret, {expiresIn: '2h'});
    return token;
}
function getUser(token) {
    if (!token) return null;
    try {
        const userData = jwt.verify(token, secret);
        return userData;
    }
    catch{
        return null;
   } 
}
module.exports = {setUser, getUser};