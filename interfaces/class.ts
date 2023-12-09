(()=>{
    interface Client {
        name: string;
        age: number;
        gender: string;
        address: Address;
        id: number;
        getTurn(position: number): string;
    }

    interface Address {
        street: string;
        country: string;
        city: string;
    }

    class User implements Client {
        constructor(public name: string, public age: number, public gender: string, public address: Address, public id: number) {}
        getTurn(position: number): string {
            return `${this.name} es el usuario con el turno: ${position}`;
        }
    }

    const user1 = new User('Jorge', 25, 'Masculino', {street: 'Av. Siempre viva', country: 'Mexico', city: 'CDMX'}, 1);

    // console.log(user1.getTurn(2));



})()