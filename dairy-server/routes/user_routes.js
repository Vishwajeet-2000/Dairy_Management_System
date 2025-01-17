const express = require('express');
const {registerUser} = require('../controllers/user')

const router = express.Router();

router.post('/register', registerUser); // Create a user    
router.post('/login', registerUser); // login  user 


module.exports = router; // Export the router

