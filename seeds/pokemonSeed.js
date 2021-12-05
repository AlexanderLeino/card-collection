const mongoose = require('mongoose')
const {Pokemon} = require('../models/')

mongoose.connect('mongodb://localhost/pokemonDb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const pokemonSeed = [
    {
        name: "Rockruff",
        type: "fighting",
        move1: "crunch",
        damage1: "30",
        move1Description: "Flip a coin. If heads, discard an energy from your opponent's active pokemon",
        artist: "Yuu Nishida",
        cardType: "None of the Above",
        cardSet: "61ac93eb0488fae3d0d5e72e"
    },

    {
        name: "Diglett",
        type: "fighting",
        move1: "dig",
        damage1: "10",
        move1Description: "Flip a coin. If heads, during your opponents next turn preventa all damage from and effects of attacks done to this pokemon.",
        artist: "Souichiriou Gunjima",
        cardType: "Reverse Holo",
        cardSet: "61ac93eb0488fae3d0d5e72e"
    },
    
]

const seedPokemon = () => Pokemon.deleteMany({})
  .then(() => Pokemon.collection.insertMany(pokemonSeed))
  .then((data) => {
    console.log('records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

module.exports = seedPokemon