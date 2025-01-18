const express = require('express');
const {addCustomer, getCustomers} = require('../controllers/customers')

const router = express.Router();


router.post('/add-customer', addCustomer); // Joining the API path and function  
router.post('/get-customer', getCustomers);

module.exports = router; 