(()=>{
    interface Client {
        name: string;
        age: number;
        gender: string;
        address: Address;
    }

    interface Address {
        street: string;
        country: string;
        city: string;
    }

    const client1: Client = {
        name: 'Karina',
        age: 23,
        gender: 'F',
        address: {
            street: 'Av. 1',
            country: 'CO',
            city: 'MED'
        }
    }


})();