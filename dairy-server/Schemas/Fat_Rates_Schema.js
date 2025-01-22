// FatRate Schema
const mongoose = require('mongoose');

const fatRateSchema = new mongoose.Schema({
  fat: { type: Number, required:true, unique: true, sparse: true },
  rate: { type: Number, required:true}
});

module.exports = mongoose.model('FatRate', fatRateSchema);