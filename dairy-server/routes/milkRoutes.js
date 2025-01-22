const express = require('express');
const {addMilkRecord, getMilkRecords, deleteMilkRecord, updateMilkRecord} = require('../controllers/milkController')

const router = express.Router();


router.post('/add-milk', addMilkRecord); // Joining the API path and function 
router.get('/get-milk-records', getMilkRecords);
router.delete('/dlt-milk-record/:id', deleteMilkRecord);
router.put('/update-milk-record/:id', updateMilkRecord);

module.exports = router; 