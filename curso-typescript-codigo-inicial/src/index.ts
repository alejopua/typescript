import { getPoke } from "./generics/get-api";

getPoke(3)
    .then(pokemon => console.log(pokemon.name))
    .catch( err => console.log(err))