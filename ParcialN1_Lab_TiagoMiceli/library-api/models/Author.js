const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({

    name: {type: String, required: true},
    biogaraphy: {type: String, required: false},
    birthDate: {type: Date, default: Date.now, required: true},
    nacionality: {type: String, required: true},
    books: [{type: mongoose.Schema.Types.ObjectId, ref: 'Book'}],
});

module.exports = mongoose.model('Author', authorSchema);