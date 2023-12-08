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

        set modifyAge(age: number){
            if (typeof this.age === 'string' ) {
                throw new Error("La asignación debe ser un paramatro de tipo numero");
            }
            this.age = age;
        }

        get printData(){
            return `
            full name: ${this.getFullName()} 
            age: ${this.age} 
            country: ${this.country} 
            marital status: ${this.maritalStatus}
            `;
        }
    }
    const user1: OtherInfo = new OtherInfo('Catalina', 'Perez', 21, 'USA', false);
    user1.modifyAge = 19;
    // console.log(user1.printData);
})();