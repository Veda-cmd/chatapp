const express = require('express');
const router = express.Router();
const userControl = require('../controllers/userController');
const auth = require('../auth/auth');

router.post('/register', userControl.register);
router.post('/login', userControl.login);
router.post('/forgot',userControl.forgot);
router.post('/reset',auth.checkToken,userControl.reset);
// router.post('/verify',auth.checkToken,userControl.verifyMail);

module.exports = router;