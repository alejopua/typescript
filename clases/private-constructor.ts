(()=>{
    class SingleUser {
        static instance: SingleUser;
        static box: string;
        private constructor(protected name: string, protected surname: string){}

        static getFullName(name: string, surname: string){
            if(!SingleUser.instance){
                SingleUser.instance = new SingleUser(name, surname);
                this.box = `Hola ${name} ${surname}, eres la única`
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