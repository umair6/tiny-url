const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
"username" : {"type": String, "required": true},
"password" : {"type": String, "required": true},
"email" : {"type": String, "required": true, "unique": true},
"role" : {"type": String, "default": "Normal"}
}, {timestamps: true});


const USER = mongoose.model('USER', userSchema);
module.exports = {USER};