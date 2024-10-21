const pokeapi = {};

// converter o modelo da pokeApi para um modelo personalizado
function convertPokeApiDetailsToPokemon(pokeDetail) {
  const pokemon = new Pokemon();
  pokemon.number = pokeDetail.order;
  pokemon.name = pokeDetail.name;

  //destruct
  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  const [type] = types;

  pokemon.types = types;
  pokemon.type = type; // pega o primeiro elemento do array

  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

  return pokemon;
}

// convert lista de promessas "Promise.ALL()" para pegar cada detalhe
pokeapi.getPokemonsDetails = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailsToPokemon); // retornar o Poke personalizada
};

pokeapi.getPokemons = (offset = 0, limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  return fetch(url)
    .then((response) => response.json()) // convert JSON response
    .then((jsonBody) => jsonBody.results) // capiture do body
    .then((pokemons) => pokemons.map(pokeapi.getPokemonsDetails)) // convert lista de promessas "Promise.ALL()" para pegar cada detalhe
    .then((detailRequests) => Promise.all(detailRequests)) // Esperar a lista ser resolvida
    .then((pokemonDetails) => pokemonDetails) //retorna a lista de pokemon
    .catch((err) => console.error(err));
};
