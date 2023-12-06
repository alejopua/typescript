(()=>{
    // Objetos con tipos específicos
    
    let superHero: {name: string, age?: number, powers: string[]} = {
        name: 'Ironman',
        age: 45,
        powers: ['Volar', 'Lanzar misiles', 'Disparar láser'],
    }

    superHero = {
        name: 'Capitán América',
        powers: ['Fuerza', 'Velocidad'],
    }

    console.log(superHero);

})();