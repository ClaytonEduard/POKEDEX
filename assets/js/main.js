//configurando a api
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

fetch(url)
  .then((response) => response.json())
  .then((jsonBody) => console.log(jsonBody)) // recebe oretorno do primeiro then
  .catch((err) => console.error("Fetch Error :-S", err))
  .finally(() => console.log("Fetch request completed"));
