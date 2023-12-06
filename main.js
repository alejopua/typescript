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
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(", ");
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(() => {
    function name() {
    }
    name();
    const name2 = (name) => {
        return name;
    };
    name2('Hernandez');
    const name3 = (name, age) => {
        return `I'm ${name} and I'm ${age || 'infinite'} years old`;
    };
    console.log(name3('Pablo'));
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
    const fullName = (firstName, ...resArgs) => {
        return `${firstName} ${resArgs.join(' ')}`;
    };
    const rta5 = fullName('Pablo', 'Mario', 'Hernandez');
    console.log(rta5);
    const sum = (a, b) => a + b;
    const greeting = (name) => `I'm ${name}`;
    const saveWorld = () => `The world is saved`;
    let myFunction;
    myFunction = sum;
    console.log(myFunction(1, 2));
    myFunction = greeting;
    console.log(myFunction('Pablo'));
    myFunction = saveWorld;
    console.log(myFunction());
})();
(() => {
    let superHero = {
        name: 'Ironman',
        age: 45,
        powers: ['Volar', 'Lanzar misiles', 'Disparar láser'],
    };
    console.log(superHero);
})();
(() => {
    let superHero = {
        name: 'Ironman',
        age: 45,
        powers: ['Volar', 'Lanzar misiles', 'Disparar láser'],
    };
    superHero = {
        name: 'Capitán América',
        powers: ['Fuerza', 'Velocidad'],
    };
    console.log(superHero);
})();
(() => {
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
    console.log((_b = (_a = superHero.getName) === null || _a === void 0 ? void 0 : _a.call(superHero)) !== null && _b !== void 0 ? _b : "Unknown");
})();
(() => {
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
(() => {
    let superHero = 'Thinking..';
    superHero = 'Thor';
    superHero = {
        name: 'Ironman',
        age: 45,
        powers: ['Dinero', 'Inteligencia'],
    };
    console.log(superHero);
})();
(() => {
    let anything;
    anything = 20.54693826;
    let rta = anything.toFixed(2);
    console.log({ rta });
    anything = 'Hola mundo';
    let rta2 = anything.toUpperCase();
    console.log({ rta2 });
})();
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    const fuerzaFlash = 5;
    const fuerzaSuperman = 100;
    const fuerzaBatman = 1;
    const fuerzaAcuaman = 0;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    let numbers = [1, 2, 3, 4, 5, 6];
    let villians = ['hulk', 'ant man', 'captain america'];
    villians.forEach(v => console.log(v.toUpperCase()));
    numbers.map(n => console.log(n * 10));
    numbers.forEach(n => console.log(n * 2));
})();
(() => {
    let isGirl = true;
    let isBoy = true;
    let comparative = isGirl = isBoy ? true : false;
    console.log({ comparative });
    console.log({ isGirl });
    console.log({ isBoy });
})();
(() => {
    let DaysOfTheWeek;
    (function (DaysOfTheWeek) {
        DaysOfTheWeek["SUN"] = "SUN";
        DaysOfTheWeek["MON"] = "MON";
        DaysOfTheWeek["TUE"] = "TUE";
        DaysOfTheWeek["WED"] = "WED";
        DaysOfTheWeek["THU"] = "THU";
        DaysOfTheWeek["FRI"] = "FRI";
        DaysOfTheWeek["SAT"] = "SAT";
    })(DaysOfTheWeek || (DaysOfTheWeek = {}));
    let day = DaysOfTheWeek.SAT;
    console.log(DaysOfTheWeek);
    console.log({ day });
})();
(() => {
    const error = (msg) => {
        throw new Error(msg);
    };
    error('Error critico...');
})();
(() => {
    let nullVariable;
    let undefinedVariable;
    nullVariable = 1;
    undefinedVariable = 1;
})();
(() => {
    let avengers = 9;
    let villians = 16;
    if (avengers < villians) {
        console.log('Estamos en la olla');
    }
    else {
        console.log('Pan comido');
    }
})();
(() => {
    var _a;
    let batman = 'Batman';
    let spiderman = "Spiderman";
    let blackwidow = `Black Widow`;
    console.log(`They are ${batman.toUpperCase()}, ${spiderman} and ${blackwidow}`);
    console.log(((_a = batman[30]) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || 'No existe');
})();
(() => {
    let hero = ['Ant man', 400, true];
    hero[0] = 'Guason';
    hero[1] = 300;
    hero[2] = false;
    console.log({ hero });
})();
(() => {
    function name() {
        console.log('Hola Mundo');
    }
    name();
    const name2 = () => console.log('Hola Mundo 2');
    name2();
})();
//# sourceMappingURL=main.js.map