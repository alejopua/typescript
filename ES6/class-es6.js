(()=>{
    class Avenger {
        constructor(name = 'no name' , power = 'no power' , points = 0) {
            this.name = name;
            this.power = power;
            this.points = points;
        }
    }

    // const hulk = new Avenger();
    const hulk = new Avenger('Hulk', 'Super fuerza', 9000);

    console.log(hulk);

    class FlyHero extends Avenger {
        constructor(name, power, points, fly = true, speed = 'medium') {
            super(name, power, points);
            this.fly = fly;
            this.speed = speed;
        }
    }

    const falcon = new FlyHero('Falcon', 'Volar', 100, true, 'fast');
    console.log(falcon);


})();