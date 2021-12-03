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

const TrainerSchema = Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    cardNumber: {
        type: Number,
        maxlength: 3,
        trim: true,
    },
    Description: {
        type: String,
        required: true,
        trim: true,
    },
    artist: {
        type: String,
        required: true,
        trim: true,
    },
    cardSet: {
        type: Schema.Types.ObjectId, ref:'CardSet'
    }
})
const PokemonSchema = Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    type: {
        type: String,
        required: true,
    },
    move1: {
        type: String,
        required: true,
        trim: true,
    },
    damage1:{
        type: String,
        required: true,
        trim: true,
    },

    move1Description: {
        type: String,
        maxlength: 150,
        required: true,
        trim: true,
    },
    move2: {
        type: String,
        required: false,
        trim: true,
    },
    damage2: {
        type: String,
        required: false,
        trim: true,
    },

    move2Description: {
        type: String,
        maxlength: 150,
        required: false,
    },

    artist: {
        type: String,
        required: true,
        trim: true,
    },

    cardSet: [{
        type: Schema.Types.ObjectId, ref: 'CardSet'}],

    quantity: {
        type: Number,
        default: 1
    },
    
},{collection: 'Pokemon'})

const Pokemon = mongoose.model('Pokemon', PokemonSchema)

module.exports = {Pokemon, CardSet}