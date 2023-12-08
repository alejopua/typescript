"use strict";
(() => {
    class User {
        constructor(name, surname) {
            this.name = name;
            this.surname = surname;
        }
        getFullName() {
            return `${this.name} ${this.surname}`;
        }
    }
    class OtherInfo extends User {
        constructor(name, surname, age, country, maritalStatus) {
            super(name, surname);
            this.age = age;
            this.country = country;
            this.maritalStatus = maritalStatus;
        }
        set modifyAge(age) {
            if (typeof this.age === 'string') {
                throw new Error("La asignación debe ser un paramatro de tipo numero");
            }
            this.age = age;
        }
        get printData() {
            return `
            full name: ${this.getFullName()} 
            age: ${this.age} 
            country: ${this.country} 
            marital status: ${this.maritalStatus}
            `;
        }
    }
    const user1 = new OtherInfo('Catalina', 'Perez', 21, 'USA', false);
    user1.modifyAge = 19;
})();
(() => {
    class Avengers {
        constructor(name, power) {
            this.name = name;
            this.power = power;
        }
    }
    Avengers.team = 'Avengers';
    const antman = new Avengers('Antman', 50);
    class Heros {
        constructor(name, power, realName) {
            this.name = name;
            this.power = power;
            this.realName = realName;
        }
    }
    Heros.team = 'DC';
    const guason = new Heros('Guason', 100);
})();
(() => {
    class User {
        constructor(name, surname) {
            this.name = name;
            this.surname = surname;
        }
        getFullName() {
            return `${this.name} ${this.surname}`;
        }
    }
    class OtherInfo extends User {
        constructor(name, surname, age, country, maritalStatus) {
            super(name, surname);
            this.age = age;
            this.country = country;
            this.maritalStatus = maritalStatus;
        }
        printData() {
            return `
            full name: ${this.getFullName()} 
            age: ${this.age} 
            country: ${this.country} 
            marital status: ${this.maritalStatus}
            `;
        }
    }
    const user1 = new OtherInfo('Catalina', 'Perez', 21, 'USA', false);
})();
(() => {
    class User {
        constructor(name, surname) {
            this.name = name;
            this.surname = surname;
        }
        getFullName() {
            return `${this.name} ${this.surname}`;
        }
    }
    class OtherInfo extends User {
        constructor(name, surname, age, country, maritalStatus) {
            super(name, surname);
            this.age = age;
            this.country = country;
            this.maritalStatus = maritalStatus;
        }
        set modifyAge(age) {
            if (typeof this.age === 'string') {
                throw new Error("La asignación debe ser un paramatro de tipo numero");
            }
            this.age = age;
        }
        get printData() {
            return `
            full name: ${this.getFullName()} 
            age: ${this.age} 
            country: ${this.country} 
            marital status: ${this.maritalStatus}
            `;
        }
    }
    const user1 = new OtherInfo('Catalina', 'Perez', 21, 'USA', false);
    user1.modifyAge = 19;
})();
(() => {
    class Cal {
        constructor(a, b) {
            this.a = a;
            this.b = b;
        }
        suma() {
            const operation = 'suma';
            const rta = this.a + this.b;
            return `${this.msj(rta, operation)}`;
        }
        resta() {
            const operation = 'resta';
            const rta = this.a - this.b;
            return `${this.msj(rta, operation)}`;
        }
        multiplicacion() {
            const operation = 'multiplicacion';
            const rta = this.a * this.b;
            return `${this.msj(rta, operation)}`;
        }
        division() {
            const operation = 'division';
            const rta = this.a / this.b;
            return `${this.msj(rta, operation)}`;
        }
        msj(rta, operation) {
            if (operation === 'division' && this.b === 0) {
                console.log(`No se puede dividir por 0`);
            }
            else if (operation === 'suma' || operation === 'resta' || operation === 'multiplicacion' || operation === 'division') {
                console.log(`El resultado de la ${operation} es ${rta}`);
            }
        }
    }
    const rta = new Cal(2, 0);
})();
(() => {
    class SingleUser {
        constructor(name, surname) {
            this.name = name;
            this.surname = surname;
        }
        static getFullName(name, surname) {
            if (!SingleUser.instance) {
                SingleUser.instance = new SingleUser(name, surname);
                this.box = `Hola ${name} ${surname}, eres la única`;
                return this.box;
            }
            SingleUser.instance;
            return this.box;
        }
    }
    const user = SingleUser.getFullName('Catalina', 'Perez');
    const user2 = SingleUser.getFullName('Mariana', 'Purn');
    const user3 = SingleUser.getFullName('Rosa', 'Stewar');
    const user4 = SingleUser.getFullName('Gani', 'Gonzi');
    console.log(user);
    console.log(user2);
    console.log(user3);
    console.log(user4);
})();
//# sourceMappingURL=main.js.map