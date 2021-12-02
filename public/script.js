let submitBtn = document.querySelector('button')

submitBtn.addEventListener("click", async (e)=> {
    e.preventDefault
    const pokemonName = document.getElementById('pokemon-name').value
    const pokemonType = document.getElementById('pokemon-type').value
    const move1 = document.getElementById('move1').value
    const move2 = document.getElementById('move2').value
    const damage1 = document.getElementById('damage1').value
    const damage2 = document.getElementById('damage2').value
    const artist = document.getElementById('artist').value
    const year = document.getElementById('year').value
    const collection = document.getElementById('collection').value
    await fetch('/api/pokemon', {
        method: 'Post',
        body: JSON.stringify({pokemonName, pokemonType, move1, move2, damage1, damage2, artist, year, collection}),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    
    
})





