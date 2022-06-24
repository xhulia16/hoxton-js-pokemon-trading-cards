// @ts-nocheck
// - Make sure you check and understand the data that is given to you!
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <ul class="cards"></ul>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

//<li class="card">
//<h2 class="card--title">Bulbasaur//</h2>
//<img
//width="256"
//class="card--img"
//src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
///>
//<ul class="card--text">
//<li>HP: 45//</li>
//<li>ATTACK: 49//</li>
//<li>DEFENSE: 49//</li>
//<li>SPECIAL-ATTACK: 65//</li>
//<li>SPECIAL-DEFENSE: 65//</li>
//<li>SPEED: 45//</li>
//</ul>
//</li>
function createPokemonCard(pokemon) {

    let cardLi = document.createElement("li")
    cardLi.className = 'card'

    let titleH2 = document.createElement("h2")
    titleH2.className = 'card--tittle'
    titleH2.textContent = pokemon.name.toUpperCase()

    let pokemonImg = document.createElement("img")
    pokemonImg.className = 'card--img'
    pokemonImg.width = 256
    pokemonImg.src = pokemon.sprites.other['official-artwork'].front_default

    let statsUl = document.createElement("ul")
    statsUl.className = 'card--text'

    let hpLi = document.createElement("li")
    hpLi.textContent = `${pokemon.stats[0].stat.name.toUpperCase()}: ${pokemon.stats[0].base_stat}`

    let attackLi = document.createElement("li")
    attackLi.textContent = `${pokemon.stats[1].stat.name.toUpperCase()}: ${pokemon.stats[1].base_stat}`

    let defenseLi = document.createElement("li")
    defenseLi.textContent = `${pokemon.stats[2].stat.name.toUpperCase()}: ${pokemon.stats[2].base_stat}`

    let specialAttackLi = document.createElement("li")
    specialAttackLi.textContent = `${pokemon.stats[3].stat.name.toUpperCase()}: ${pokemon.stats[3].base_stat}`

    let specialDefenseLi = document.createElement("li")
    specialDefenseLi.textContent = `${pokemon.stats[4].stat.name.toUpperCase()}: ${pokemon.stats[4].base_stat}`

    let speedLi = document.createElement("li")
    speedLi.textContent = `${pokemon.stats[5].stat.name.toUpperCase()}: ${pokemon.stats[5].base_stat}`


    cardLi.append(titleH2, pokemonImg, statsUl)
    statsUl.append(hpLi, attackLi, defenseLi, specialAttackLi, specialDefenseLi, speedLi)

    console.log(cardLi)

    let cardsUl = document.querySelector(".cards")
    cardsUl.append(cardLi)
}
//createPokemonCards(data[0])

for (let pokemon of data) {
    createPokemonCard(pokemon)
}