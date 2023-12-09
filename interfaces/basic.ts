(()=>{
    // definición de interfaces
    
    interface Hero {
        name: string, 
        age?: number, 
        powers: string[], 
        getName?: () => string
    }

    let superman: Hero = {
        name: 'Superman',
        age: 30,
        powers: ['Volar', 'Super fuerza'],
        getName(){
            return this.name;
        }
    }

    // console.log(superman.getName?.() ?? 'No tiene nombre')
})();