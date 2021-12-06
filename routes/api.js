const router = require('express').Router()
const db = require('../models/')

//matches api/pokemon
router.post('/pokemon',  async ({body}, res) => {
    console.log('This route was hit')
    try{
    
    let {pokemonName, pokemonType, move1, move2, damage1, damage2, move1Description, move2Description, artist, pickedCardSet, cardRarity, quantity, cardType} = body
    
     let newPokemon = await db.Pokemon.create({name: pokemonName, type: pokemonType, move1, move2, damage1, damage2, move1Description, move2Description, artist, originalCardSet: pickedCardSet, rarity: cardRarity, quantity , cardType})
        console.log(newPokemon)
        res.json(newPokemon).status(404)
    } catch(e){
        res.json(e)
    }
})
//matches api/pokemon
router.get('/pokemon', async (req, res) => {
    try {console.log('Get Route was hit')
    let pokemonData = await db.Pokemon.find({}).populate('originalCardSet')
    res.json(pokemonData).status(200)}
    catch(e){
        res.json(e).status(404)
        console.log(e)
    }
})

module.exports = router