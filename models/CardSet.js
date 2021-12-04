const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CardSetSchema = Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    year: {
        type: Number,
        maxlength: 4,
        required: true,
    },
    
    totalNumberOfCardsInSet: {
        type: Number,
        maxlength: 3,
        required: true,
    }
}) 

const CardSet = mongoose.model('CardSet', CardSetSchema)

module.exports = CardSet