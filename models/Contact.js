const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({

    id: {
        type: Number,
        required: true,
        unique: true
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Contact', contactSchema, 'Contacts');
