const express = require('express');
const {addFatRates } = require('../controllers/Fat_Rates_Controller')

const router = express.Router();

router.post('/add-fat', addFatRates); // Joining the API path and function 

module.exports = router; 