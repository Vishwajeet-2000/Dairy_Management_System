const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name : String,
    email : String,
    phone : Number,
    adress : String
}, { timestamps: true })
module.exports = mongoose.model("customers", customerSchema)