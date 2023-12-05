"use strict";
(() => {
    const msg = 'Hello World watch mode 2';
    console.log(msg);
    const hero = {
        name: 'Ironman',
        age: 45
    };
    hero.age = 50;
    console.log(hero.age + 5);
    function printMsj(msj) {
        return console.log(`Hello, ${msj.toUpperCase()}`);
    }
    printMsj('Ironman');
})();
