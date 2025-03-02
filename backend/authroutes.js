const express = require('express');
const router = express.Router();
const {registerUser, logoutUser, loginUser} = require('./authcontroller');

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/logout', logoutUser);

module.exports = router;