const router = require('express').Router()
const {Pokemon} = require('../models/')

//matches api/pokemon
router.post('/pokemon', ({body}, res) => {
    
    let {pokemonName, pokemonType, move1, damage1, move2, damage2, artist, year} = body
    
    Pokemon.create({name: pokemonName, type: pokemonType, move1, damage1, move2, damage2, artist, year})
    res.send("We received the pokemon").status(200)
})

module.exports = router