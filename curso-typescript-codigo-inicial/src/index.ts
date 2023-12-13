// import { getPoke } from "./generics/get-api";


// getPoke(3)
//     .then(pokemon => console.log(pokemon.name))
//     .catch( err => console.log(err))

import { Pokemon } from "./decorators/pokemon-class";

const bulvasaut = new Pokemon('bulvasaur');
// (Pokemon.prototype as any).customName = 'squartum';
// bulvasaut.pokemonSaved(5);

bulvasaut.publicApi = 'https://google.com';
console.log(bulvasaut);