(()=>{
    // definición de type en typescript

    type Hero = {
        name: string, 
        age?: number, 
        powers: string[], 
        getName?: () => string
    };

    let superHero: string | Hero = 'Thinking..';
    superHero = 'Thor';

    superHero = {
        name: 'Ironman',
        age: 45,
        powers: ['Dinero', 'Inteligencia'],
    }

    console.log(superHero);

})();