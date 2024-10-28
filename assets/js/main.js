// montando a lista de pokemons
const pokemonList = document.getElementById("pokemonList");

const loadMoreButton = document.getElementById("loadMoreButton");

const limit = 5;
let offset = 0;

function loadPokemonItens(offset, limit) {
  //converterndo uma lista de pokemons em uma lista html com pokemos
  pokeapi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons
      .map(
        (pokemon) =>
          `
      <li class="pokemon ${pokemon.type}">
          <span class="number">${pokemon.number}</span>
          <span class="name"> ${pokemon.name}</span>
          <div class="detail">
            <ol class="types">
             ${pokemon.types
               .map((type) => `<li class="type ${type}">${type}</li>`)
               .join(" ")}
            </ol>
            <img src="${pokemon.photo}"
              alt="${pokemon.name}"
            />
          </div>
        </li>
    `
      )
      .join(""); //juntar todos os htmls
    pokemonList.innerHTML += newHtml;
  });
}

//primeira busca
loadPokemonItens(offset, limit);

loadMoreButton.addEventListener("click", (event) => {
  offset += limit;
  loadPokemonItens(offset, limit);
});
