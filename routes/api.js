const router = require('express').Router()
const {Pokemon} = require('../models/')

//matches api/pokemon
router.post('/pokemon', ({body}, res) => {
    
    let {pokemonName, pokemonType, move1, move2, damage1, damage2, move1Description, move2Description, artist, pickedCardSet, cardRarity, quantity} = body
    
    Pokemon.create({name: pokemonName, type: pokemonType, move1, move2, damage1, damage2, move1Description, move2Description, artist, pickedCardSet, cardRarity, quantity})
    res.send("We received the pokemon").status(200)
})
//matches api/pokemon
router.get('/pokemon', async (req, res) => {
    try {console.log('Get Route was hit')
    let pokemonData = await Pokemon.find().populate('cardSet')
    res.json(pokemonData).status(200)}
    catch(e){
        res.json(e).status(404)
    }
})

module.exports = router