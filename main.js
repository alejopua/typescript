"use strict";
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
        console.log("...... gogogo!!!");
    }
};
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Person {
    constructor(nombre, edad, sexo, estadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
    }
    imprimirBio() {
        const estadoCivilStr = this.estadoCivil ? 'casado/a' : 'soltero/a';
        console.log(`I'm ${this.nombre}, ${this.edad} years old, ${this.sexo}, and ${estadoCivilStr}.`);
    }
}
const client1 = new Person('Alejandro', 25, 'M', false);
client1.imprimirBio();
(() => {
    let superman = {
        name: 'Superman',
        age: 30,
        powers: ['Volar', 'Super fuerza'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class User {
        constructor(name, age, gender, address, id) {
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.address = address;
            this.id = id;
        }
        getTurn(position) {
            return `${this.name} es el usuario con el turno: ${position}`;
        }
    }
    const user1 = new User('Jorge', 25, 'Masculino', { street: 'Av. Siempre viva', country: 'Mexico', city: 'CDMX' }, 1);
})();
(() => {
    const client1 = {
        name: 'Karina',
        age: 23,
        gender: 'F',
        address: {
            street: 'Av. 1',
            country: 'CO',
            city: 'MED'
        }
    };
})();
(() => {
    const sum = (a, b) => {
        const rta = a + b;
        return `Result: ${rta}`;
    };
})();
(() => {
    const client1 = {
        name: 'Karina',
        age: 23,
        gender: 'F',
        address: {
            street: 'Av. 1',
            country: 'CO',
            city: 'MED'
        },
        getName() {
            return this.name;
        }
    };
})();
//# sourceMappingURL=main.js.map