const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    review: {type: String, required: false},
    genre: {type: String, required: true},
    publishDate: {type: Date, default: Date.now, required: true},
    aviable: {type: Boolean, default: true, required: true},    
    
});

module.exports = mongoose.model('Book', bookSchema);