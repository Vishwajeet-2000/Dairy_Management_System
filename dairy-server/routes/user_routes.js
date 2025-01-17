const express = require('express');
const {registerUser, loginUser} = require('../controllers/user')

const router = express.Router();

router.post('/register', registerUser); // Create a user    
router.post('/login', loginUser); // login  user 


module.exports = router; // Export the router

