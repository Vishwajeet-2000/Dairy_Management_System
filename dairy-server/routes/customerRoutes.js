const express = require('express');
const {addCustomer} = require('../controllers/customers')

const router = express.Router();


router.post('/add-customer', addCustomer); // Joining the API path and function  

module.exports = router; 