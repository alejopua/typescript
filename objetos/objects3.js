"use strict";
(() => {
    // definición de métodos dentro de los objetos
    var _a, _b;
    let superHero = {
        name: 'Ironman',
        age: 45,
        powers: ['Volar', 'Lanzar misiles', 'Disparar láser']
    };
    superHero = {
        name: 'Capitán América',
        powers: ['Fuerza', 'Velocidad'],
        getName() {
            return this.name;
        }
    };
    // opcional chaining" - ?. : Esto permite leer el valor de una propiedad ubicada dentro de una cadena de objetos conectados sin tener que validar explícitamente que cada referencia en la cadena sea válida. Si la referencia a la izquierda de ?. es null o undefined, la expresión se evalúa como undefined. De lo contrario, la expresión continúa evaluándose a la derecha de ?.
    // el nullish coalescing operator ??  evalua,  Si el valor de la expresión a la izquierda de ?? es null o undefined, se devuelve el valor a la derecha (en este caso, la cadena "Unknown").
    console.log((_b = (_a = superHero.getName) === null || _a === void 0 ? void 0 : _a.call(superHero)) !== null && _b !== void 0 ? _b : "Unknown");
})();
