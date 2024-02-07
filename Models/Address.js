const mongoose = require('mongoose');


const addressSchema = new mongoose.Schema({
    country: {type: String},
    fullName: {type: String},
    mobileNum: {type: Number},
    pincode: {type: Number},
    houseName: {type: String},
    villName: {type: String},
    mandalName: {type: String},
    stateName: {type: String},
})



module.exports = mongoose.model('Address', addressSchema);