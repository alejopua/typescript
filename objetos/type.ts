(()=>{
    // definición de type en typescript

    type Hero = {
        name: string, 
        age?: number, 
        powers: string[], 
        getName?: () => string
    }

    let acuaman: Hero = {
        name: 'Aquaman',
        powers: ['Respirar bajo el agua', 'Controlar la temperatura del agua', 'Super fuerza']
    }

    let superman: Hero = {
        name: 'Superman',
        age: 30,
        powers: ['Volar', 'Super fuerza'],
        getName(){
            return this.name;
        }
    }

    console.log(superman.getName?.() ?? 'No tiene nombre')

})();