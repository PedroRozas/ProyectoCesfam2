const mongoose = require('mongoose');

const pacientsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    phone: {type: String, required: true},
    doctor: {type: String, required: true},
    


});

module.exports = mongoose.model('pacients', pacientsSchema)
