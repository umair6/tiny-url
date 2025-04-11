const {loginNewUser, signUpNewUser} = require('../controller/user')
const express = require('express');
const router = express.Router();





// userRouter.route('/').post(signUpNewUser);

router.post('/signup', signUpNewUser);
router.post('/login', loginNewUser);



module.exports = router;
