const mongoose = require('mongoose')
const Schema = mongoose.Schema



const PokemonSchema = Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25,
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

    cardType: {
        type: String,
        required: true,
    },

    cardSet: [{
        type: Schema.Types.ObjectId, ref: 'CardSet'
    }],
        
    rarity: {
        type: String,
        default: 'common'
    }, 

    quantity: {
        type: Number,
        default: 1
    },
    
},{collection: 'Pokemon'})

const Pokemon = mongoose.model('Pokemon', PokemonSchema)

module.exports = Pokemon