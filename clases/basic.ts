(()=>{
    class Avengers {

        private name: string;
        private power: number;
        static team: string = 'Avengers';

        constructor(name: string, power: number ){
            this.name = name;
            this.power = power;
        }
    }

    const antman = new Avengers('Antman', 50);
    // console.log(antman);    
    // console.log(Avengers.team);


    // short version

    class Heros {
        static team: string = 'DC';
        constructor(
            public name: string, 
            private power: number,
            public realName?: string
            ){}
    }

    const guason = new Heros('Guason', 100);
    // console.log(guason);
    // console.log(Heros.team);  

})();