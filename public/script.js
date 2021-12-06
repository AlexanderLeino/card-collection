let submitBtn = document.querySelector('button')

submitBtn.addEventListener("click", (e)=> {
    e.preventDefault
    const pokemonName = document.getElementById('pokemon-name').value
    const pokemonType = document.getElementById('pokemon-type').value
    const move1 = document.getElementById('move1').value
    const move2 = document.getElementById('move2').value
    const damage1 = document.getElementById('damage1').value
    const damage2 = document.getElementById('damage2').value
    const move1Description = document.getElementById('move1Description').value
    const move2Description = document.getElementById('move2Description').value
    const artist = document.getElementById('artist').value
    const cardType = document.getElementById('card-type').value
    const year = document.getElementById('year').value
    const pickedCardSet = document.getElementById('pickedCardSet').value
    const cardRarity = document.getElementById('card-rarity').value
    const quantity = document.getElementById('quantity').value

    console.log( cardRarity, pickedCardSet)
    fetch('/api/pokemon', {
        method: 'Post',
        body: JSON.stringify({pokemonName, pokemonType, move1, move2, damage1, damage2, move1Description, move2Description, artist, cardType, pickedCardSet, cardRarity, quantity}),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    
    
})





