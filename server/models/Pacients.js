const mongoose = require('mongoose');

const pacientsSchema = new mongoose.Schema({

    name: {type: String, required: true},
    lastname: {type: String, required: true},
    birth: {type: String, required: true},
    phone: {type: String, required: true},
    doctor: {type: String, required: true},
    Recipe:{type: mongoose.Schema.Types.ObjectId, ref: 'Recipes'},
    
});

module.exports = mongoose.model('pacients', pacientsSchema)
