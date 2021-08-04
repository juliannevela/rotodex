/*
  1. Make GET request to the PokeAPI to get pokemon by generations.
    a) @returns list of NAMES and LINKS

  2. Make GET request to the /pokemon/NAME based on previous response.
    a) @returns stats of pokemon, sprites, types, moves, abilities, etc.
    b) Flavor text received by /pokemon-species/NAME -> flavor_text_entries(array)
  
*/

export const fetchPokemon = async (generation) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${generation}/`);
    const { main_region, pokemon_species } = await res.json();
    console.log(main_region);
    const mungedGen = {
        name: main_region.name,
        data: pokemon_species,
    };
    return mungedGen;
};

/*
  SETUP GLOBAL STATE PROVIDER FOR POKEMON DATA

  ON APP LOAD: check if data is cached, if not, make request to API for new data.

  @param {Object} state - global state object
  properties: {
    generation: {
      name: 'generation',
      data: 'generation'
    },
    pokemon: {
      name: 'pokemon',
      description: 'flavor text',
      image: 'image',
      stats: 'stats',
      abilities: 'abilities',
      types: 'types',
      collected: 'bool',
    },

*/
