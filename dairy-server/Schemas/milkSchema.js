
// MilkRecord Schema
const mongoose = require('mongoose');

const milkRecordSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customers'},
  customerName: { type: String, required: true },
  date: { type: Date },
  session: { type: String, enum: ['Morning', 'Evening']},
  category: { type: String, enum: ['Cow', 'Buffalo']},
  quantity: { type: Number },
  fat: { type: Number},
  rate: {type:Number},
  total: { type: Number },
},{ timestamps: true });

module.exports = mongoose.model('MilkRecords', milkRecordSchema);