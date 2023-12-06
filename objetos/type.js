"use strict";
(() => {
    // definición de type en typescript
    var _a, _b;
    let acuaman = {
        name: 'Aquaman',
        powers: ['Respirar bajo el agua', 'Controlar la temperatura del agua', 'Super fuerza']
    };
    let superman = {
        name: 'Superman',
        age: 30,
        powers: ['Volar', 'Super fuerza'],
        getName() {
            return this.name;
        }
    };
    console.log((_b = (_a = superman.getName) === null || _a === void 0 ? void 0 : _a.call(superman)) !== null && _b !== void 0 ? _b : 'No tiene nombre');
})();
