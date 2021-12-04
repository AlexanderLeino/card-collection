const mongoose = require('mongoose')
const {CardSet} = require('../models/')
console.log(CardSet)

mongoose.connect('mongodb://localhost/pokemonDb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const CardSetSeed = [
    {
        name: "Base Set",
        year: 1999,
        totalNumberOfCardsInSet: 102
    },

    {
        name: "Jungle",
        year: 1999,
        totalNumberOfCardsInSet: 102
    },

    {
        name: "Fossil",
        year: 1999,
        totalNumberOfCardsInSet: 62
    },

    {
        name: "Base Set 2",
        year: 2000,
        totalNumberOfCardsInSet: 130
    },

    {
        name: "Team Rocket",
        year: 83,
        totalNumberOfCardsInSet: 83
    },

    {
        name: "Gym Heros",
        year: 2000,
        totalNumberOfCardsInSet: 132
    },

    {
        name: "Gym Challenge",
        year: 2000,
        totalNumberOfCardsInSet: 132
    },

    {
        name: "Neo Genesis",
        year: 2000,
        totalNumberOfCardsInSet: 111
    },

    {
        name: "Neo Discovery",
        year: 2001,
        totalNumberOfCardsInSet: 75
    },

    {
        name: "Neo Revelation",
        year: 21,
        totalNumberOfCardsInSet: 83
    },

    {
        name: "Neo Destiny",
        year: 2002,
        totalNumberOfCardsInSet: 113
    },

    {
        name: "Legendary Collection",
        year: 2002,
        totalNumberOfCardsInSet: 110
    },

    {
        name: "Expedition Base Set",
        year: 2002,
        totalNumberOfCardsInSet: 165
    },

    {
        name: "Aquapolis",
        year: 2003,
        totalNumberOfCardsInSet: 186
    },

    {
        name: "Skyridge",
        year: 2003,
        totalNumberOfCardsInSet: 182
    },
    
    {
        name: "EX Ruby & Sapphire",
        year: 2003,
        totalNumberOfCardsInSet: 109
    },

    {
        name: "EX Sandstorm",
        year: 2003,
        totalNumberOfCardsInSet: 100
    },

    {
        name: "EX Dragon",
        year: 2003,
        totalNumberOfCardsInSet: 100
    },

    {
        name: "EX Team Magma vs Team Aqua",
        year: 2004,
        totalNumberOfCardsInSet: 97
    },

    {
        name: "EX Hidden Legends",
        year: 2004,
        totalNumberOfCardsInSet: 102
    },













    {
        name: "EX FireRed & LeafGreen",
        year: 2004,
        totalNumberOfCardsInSet: 116
    },

    {
        name: "EX Team Rocket Returns",
        year: 2004,
        totalNumberOfCardsInSet: 111
    },

    {
        name: "EX Deoxys",
        year: 2005,
        totalNumberOfCardsInSet: 108
    },

    {
        name: "EX Emerald",
        year: 2005,
        totalNumberOfCardsInSet: 107
    },

    {
        name: "Team Rocket",
        year: 83,
        totalNumberOfCardsInSet: 83
    },

    {
        name: "Gym Heros",
        year: 2000,
        totalNumberOfCardsInSet: 132
    },

    {
        name: "Gym Challenge",
        year: 2000,
        totalNumberOfCardsInSet: 132
    },

    {
        name: "Neo Genesis",
        year: 2000,
        totalNumberOfCardsInSet: 111
    },

    {
        name: "Neo Discovery",
        year: 2001,
        totalNumberOfCardsInSet: 75
    },

    {
        name: "Neo Revelation",
        year: 21,
        totalNumberOfCardsInSet: 83
    },

    {
        name: "Neo Destiny",
        year: 2002,
        totalNumberOfCardsInSet: 113
    },

    {
        name: "Legendary Collection",
        year: 2002,
        totalNumberOfCardsInSet: 110
    },

    {
        name: "Expedition Base Set",
        year: 2002,
        totalNumberOfCardsInSet: 165
    },

    {
        name: "Aquapolis",
        year: 2003,
        totalNumberOfCardsInSet: 186
    },

    {
        name: "Skyridge",
        year: 2003,
        totalNumberOfCardsInSet: 182
    },
    
    {
        name: "EX Ruby & Sapphire",
        year: 2003,
        totalNumberOfCardsInSet: 109
    },

    {
        name: "EX Sandstorm",
        year: 2003,
        totalNumberOfCardsInSet: 100
    },

    {
        name: "EX Dragon",
        year: 2003,
        totalNumberOfCardsInSet: 100
    },

    {
        name: "EX Team Magma vs Team Aqua",
        year: 2004,
        totalNumberOfCardsInSet: 97
    },

    {
        name: "EX Hidden Legends",
        year: 2004,
        totalNumberOfCardsInSet: 102
    },
]

CardSet.deleteMany({})
  .then(() => CardSet.collection.insertMany(CardSetSeed))
  .then((data) => {
    console.log('records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
