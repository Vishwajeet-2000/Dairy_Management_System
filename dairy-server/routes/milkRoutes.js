const express = require('express');
const {addMilkRecord, getMilkRecords, deleteMilkRecord} = require('../controllers/milkController')

const router = express.Router();


router.post('/add-milk', addMilkRecord); // Joining the API path and function 
router.get('/get-milk-records', getMilkRecords);
router.delete('/dlt-milk-record/:id', deleteMilkRecord);

module.exports = router; 