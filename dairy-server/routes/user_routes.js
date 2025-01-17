const express = require('express');
const {registerUser} = require('../controllers/user')

const router = express.Router();

router.post('/user', registerUser); // Create a user


module.exports = router; // Export the router