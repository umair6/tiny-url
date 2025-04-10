const {loginNewUser, signUpNewUser} = require('../controller/user')
const express = require('express');
const userRouter = express.Router();

// userRouter.route('/').post(signUpNewUser);
userRouter.route('/signup').post(signUpNewUser);
userRouter.route('/login').post(loginNewUser);


module.exports = {userRouter};
