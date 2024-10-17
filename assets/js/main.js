//configurando a api
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

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
const pokemonList = document.getElementById("pokemonList");

fetch(url)
  .then((response) => response.json())
  .then((jsonBody) => jsonBody.results) // recebe oretorno do primeiro then
  .then((pokemons) => {
    for (let i = 0; i < pokemons.length; i++) {
      const pokemon = pokemons[i];
      pokemonList.innerHTML += convertPokemonToLi(pokemon);
    }
  }) // recebe oretorno do primeiro then
  .catch((err) => console.error("Fetch Error :-S", err))
  .finally(() => console.log("Fetch request completed"));
