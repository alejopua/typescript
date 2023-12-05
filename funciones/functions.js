"use strict";
(() => {
    /* funciones básicas */
    function name() {
    }
    name();
    /* arguments requeridos */
    // name: string, es requerido. de lo contrario, no compila
    const name2 = (name) => {
        return name;
    };
    name2('Hernandez');
    /* arguments opcionales */
    // siempre deben ir al final de los argumentos
    const name3 = (name, age) => {
        return `I'm ${name} and I'm ${age || 'infinite'} years old`;
    };
    console.log(name3('Pablo'));
    /* arguments por defecto */
    const name4 = (name, lastname, upper = false) => {
        if (upper) {
            return `${name} ${lastname || ''}`.toUpperCase();
        }
        else {
            return `${name} ${lastname || ''}`;
        }
    };
    console.log(name4('diana'));
    console.log(name4('mario', 'hernandez', true));
    /* arguments REST */
    const fullName = (firstName, ...resArgs) => {
        return `${firstName} ${resArgs.join(' ')}`;
    };
    const rta5 = fullName('Pablo', 'Mario', 'Hernandez');
    console.log(rta5);
    /* type function */
    const sum = (a, b) => a + b;
    const greeting = (name) => `I'm ${name}`;
    const saveWorld = () => `The world is saved`;
    // let myFunction: (x: number, y: number) => number;  // type function for 1 example
    // let myFunction: (x: string) => string;  // type function for 2 example
    let myFunction; // type function for 3 example
    myFunction = sum;
    console.log(myFunction(1, 2));
    myFunction = greeting;
    console.log(myFunction('Pablo'));
    myFunction = saveWorld;
    console.log(myFunction());
})();
