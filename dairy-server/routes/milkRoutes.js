const express = require('express');
const {addMilkRecord} = require('../controllers/milkController')

const router = express.Router();


router.post('/add-milk', addMilkRecord); // Joining the API path and function 

module.exports = router; 