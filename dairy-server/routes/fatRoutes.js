const express = require('express');
const {addFatRates, getFatRates } = require('../controllers/Fat_Rates_Controller')

const router = express.Router();

router.post('/add-fat', addFatRates); // Joining the API path and function 
router.get('/get-fat', getFatRates);

module.exports = router; 