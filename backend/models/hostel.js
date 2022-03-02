const mongoose = require('mongoose');

const hostelSchema = mongoose.Schema({
    hostelName: {type: String },
    price: {type: String },
});


module.exports = mongoose.model('Hostel', hostelSchema);
