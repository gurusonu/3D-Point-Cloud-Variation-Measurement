const mongoose = require('mongoose');

let User = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('User', User);