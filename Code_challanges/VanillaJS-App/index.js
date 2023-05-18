let pokemonDropDownDiv = document.getElementById("pokemon-list");
let pokemonAbilitiesDiv = document.getElementById("pokemon-abilities");
const fetchPokemonData = async () => {
  let list = await fetch("https://pokeapi.co/api/v2/pokemon/");
  return await list.json();
};

async function fetchPokemonAbilities(url) {
  let data = await fetch(url);
  let res = await data.json();
  localStorage.setItem(url, JSON.stringify(res));
  return res;
}

fetchPokemonData()
  .then((res) => {
    console.log(res);
    pokemonDropDownDiv.innerHTML =
      "<select id='dropdown-list' onchange='handleChange(event)'></select>";
    let select = document.getElementById("dropdown-list");
    res?.results.forEach((pokemon) => {
      select.innerHTML += `<option value=${pokemon.url}>${pokemon.name}</option>`;
    });
  })
  .catch((error) => console.log(error));

async function handleChange(event) {
  console.log(event.target.value);
  pokemonAbilitiesDiv.innerHTML = "<ol id='abilities-list'></ol>";
  let pokemonAbilitiesListOl = document.getElementById("abilities-list");
  let pokemonDetails = JSON.parse(localStorage.getItem(event.target.value));

  if (!pokemonDetails) {
    pokemonDetails = await fetchPokemonAbilities(event.target.value);
  }

  pokemonDetails.abilities.forEach((detail) => {
    pokemonAbilitiesListOl.innerHTML += `<li>${detail.ability.name}</li>`;
  });
}
