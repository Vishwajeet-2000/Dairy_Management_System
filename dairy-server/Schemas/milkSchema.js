
// MilkRecord Schema
const mongoose = require('mongoose');

const milkRecordSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customers'},
  date: { type: Date, default: Date.now },
  session: { type: String, enum: ['Morning', 'Evening']},
  category: { type: String, enum: ['Cow', 'Buffalo']},
  quantity: { type: Number },
  fat: { type: Number},
  total: { type: Number },
//   createdAt: { type: Date, default: Date.now }
},{ timestamps: true });

module.exports = mongoose.model('MilkRecords', milkRecordSchema);    