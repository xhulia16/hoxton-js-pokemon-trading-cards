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
function createPokemonCards(pokemon) {

    let cardLi = document.createElement("li")

    let titleH2 = document.createElement("h2")
    let pokemonImg = document.createElement("img")
    let statsUl = document.createElement("ul")

    let hpLi = document.createElement("li")
    let attackLi = document.createElement("li")
    let defenseLi = document.createElement("li")
    let specialAttackLi = document.createElement("li")
    let specialDefenseLi = document.createElement("li")
    let speedLi = document.createElement("li")
}