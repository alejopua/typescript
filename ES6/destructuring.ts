(()=>{
    /* desestructuración de objetos - destructuring object: */
    //para extraer valores de un objeto y asignarlos a una variable, se debe tener en cuenta que el nombre de la variable debe ser igual al nombre de la propiedad del objeto
    type Avengers = {
        nick: string,
        ironman: string,
        vision: string,
        captain: string,
        spiderman: string
    }

    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        captain: 'Chris Evans',
        spiderman: 'Tom Holland'
    }

    const { spiderman } = avengers;

    // console.log(spiderman);

    const printAvengers = ({ nick, vision, ...resArg}:Avengers) => {
        console.log(nick);
        console.log(vision);
        console.log(resArg);
    }

    // printAvengers(avengers);

    /* desestructuración de arreglos - destructuring array: */
    //para extraer valores de un arreglo y asignarlos a una variable, se puede hacer de dos formas:
    // 1. const [ , , , , spiderman] = avengers;
    // 2. const [ , , , , spiderman] = ['Samuel L. Jackson', 'Robert Downey Jr.', 'Paul Bettany', 'Chris Evans', 'Tom Holland'];
    // es de aclara que para la desestructuración de arreglos, se debe tener en cuenta la posición de los elementos en el arreglo, ya que se asignan a las variables en el orden en que se encuentran en el arreglo. También aclarar que se puede poner cualquier nombre a las variables, a la hora de la desestructuración.

    const heroes: string[] = ['ironman', 'spiderman', 'thor', 'hulk', 'capitan america'];

    const [iron,,thor, ...resto] = heroes;

    // console.log(iron);
    // console.log(thor);
    // console.log(resto);

})();