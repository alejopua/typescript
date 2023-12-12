import { printObject, functionGeneric, arrowGeneric, genericExample } from "../generics/generics";
import { Hero, User } from "../generics/interfaces";

// printObject("Hello World");
// printObject(123);
// printObject(true);
// printObject({ name: "John" });
// printObject([1, 2, 3, 4, 5]);
// printObject(() => "Hello World");

const spiderman = {
    name: "Peter Parker",
    team: "Avengers",
    powers: 3,
    live: true
};

// console.log(functionGeneric(3.142342543535).toFixed(2));
// console.log(arrowGeneric("hello world").toUpperCase());
console.log(genericExample<Hero>(spiderman).name);