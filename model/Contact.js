const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema

const ContactSchema = new Schema({
    firstName: {
        type:String,
        required: true
    },
    lastName: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    subject: {
        type:String,
        required: true
    },
    date: {
        type:Date,
        default: Date.now
    }
});

module.exports = ContactForm = mongoose.model('contactForm',ContactSchema);