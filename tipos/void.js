"use strict";
(() => {
    // al realizar una asignación de tipo void, a una función hace referencia a que no retorna nada.
    function name() {
        console.log('Hola Mundo');
    }
    name();
    const name2 = () => console.log('Hola Mundo 2');
    name2();
})();
