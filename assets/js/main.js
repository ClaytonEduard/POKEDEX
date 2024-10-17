// convertendo o pokemon  para a LI
function convertPokemonToLi(pokemon) {
  return `
      <li class="pokemon">
          <span class="number">#001</span>
          <span class="name"> ${pokemon.name}</span>
          <div class="detail">
            <ol class="types">
              <li class="type">torrent</li>
              <li class="type">rain-dish</li>
            </ol>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
              alt="${pokemon.name}"
            />
          </div>
        </li>
  `;
}

// montando a lista de pokemons
const pokemonList = document.getElementById("pokemonList");
//converterndo uma lista de pokemons em uma lista html com pokemos
pokeapi.getPokemons().then((pokemons = []) => {
  //const newList = convertPokemonToLi(pokemon).join("");
  // const newList = pokemons.map((pokemon, index, Array) =>
  //   convertPokemonToLi(pokemon)
  // );

  //const newHtml = newList.join(""); //juntar todos os htmls
  pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join("");
});
