const router = require('express').Router()
const db = require('../models/')

//matches api/pokemon
router.post('/pokemon', ({body}, res) => {
    
    let {pokemonName, pokemonType, move1, move2, damage1, damage2, move1Description, move2Description, artist, pickedCardSet, cardRarity, quantity} = body
    
    db.Pokemon.create({name: pokemonName, type: pokemonType, move1, move2, damage1, damage2, move1Description, move2Description, artist, pickedCardSet, cardRarity, quantity})
    res.send("We received the pokemon").status(200)
})

module.exports = router