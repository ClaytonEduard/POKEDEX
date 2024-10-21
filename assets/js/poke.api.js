const pokeapi = {};

// convert lista de promessas "Promise.ALL()" para pegar cada detalhe
pokeapi.getPokemonsDetails = (pokemon) => {
  return fetch(pokemon.url).then((response) => response.json());
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
