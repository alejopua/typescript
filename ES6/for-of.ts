(()=>{
    type Avengers = {
        name: string;
        power: number;
    }

    const ironman: Avengers = {
        name: 'Ironman',
        power: 100
    }

    const thor: Avengers = {
        name: 'Thor',
        power: 90
    }

    const capitan: Avengers = {
        name: 'Capitan America',
        power: 80
    }

    const heros: Avengers[] = [ironman, thor, capitan];

    for (const avenger of heros) {
        console.log(avenger.name);
    }
    
})();