const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = Schema({
    name: {
        type: String,
        maxlength: 15,
        unique: true,
        required: [true, 'Please Create A Unique Username'],
    },
    password: {
        type: String, 
        required: [true,'A Password is required']

    }
})

module.exports = User