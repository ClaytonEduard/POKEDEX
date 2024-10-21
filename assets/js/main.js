// convertendo os detales em LI
function convertPokemonTypesToLi(pokemonTypes) {
  return pokemonTypes.map(
    (typeSlot) => `<li class="type">${typeSlot.type.name}</li>`
  );
}

// convertendo o pokemon  para a LI
function convertPokemonToLi(pokemon) {
  return `
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

  const newHtml = pokemons.map(convertPokemonToLi).join(""); //juntar todos os htmls
  pokemonList.innerHTML = newHtml;
});
