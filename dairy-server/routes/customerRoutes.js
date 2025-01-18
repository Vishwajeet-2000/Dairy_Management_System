const express = require('express');
const {addCustomer, getCustomers, deleteCustomer} = require('../controllers/customers')

const router = express.Router();


router.post('/add-customer', addCustomer); // Joining the API path and function  
router.get('/get-customers', getCustomers);
router.delete('/del-customer/:id', deleteCustomer);

module.exports = router; 