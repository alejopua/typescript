"use strict";
var Validations;
(function (Validations) {
    Validations.plus = (a, b) => {
        return a + b;
    };
    Validations.rest = (a, b) => {
        return a - b;
    };
})(Validations || (Validations = {}));
console.log(Validations.plus(4, 4));
//# sourceMappingURL=main.js.map