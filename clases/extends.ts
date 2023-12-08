(()=>{
    class User {
        constructor(protected name: string, protected surname: string){}

        protected getFullName(): string{
            return `${this.name} ${this.surname}`;
        }
    }

    class OtherInfo extends User {
        constructor(
            name: string,
            surname: string,
            private age: number, 
            private country: string, 
            private maritalStatus: boolean
            ){
                super(name, surname);
        }

        printData(){
            return `
            full name: ${this.getFullName()} 
            age: ${this.age} 
            country: ${this.country} 
            marital status: ${this.maritalStatus}
            `;
        }
    }
    const user1 = new OtherInfo('Catalina', 'Perez', 21, 'USA', false);
    // console.log(user1.printData());
})();