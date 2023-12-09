// Crear interfaces

/*Cree una interfaz para validar el auto (el valor enviado por parámetro)*/
interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelear(): void;
}

const conducirBatimovil = ( auto: Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil: Auto = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}
//------------------------------------
/* Cree una interfaz con que permita utilizar el siguiente objeto, utilizando propiedades opcionales */

interface Villian {
  reir: boolean;
  comer: boolean;
  llorar?: boolean;
}

const guason: Villian = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: Villian ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}
//------------------------------------
/* Cree una interfaz para la siguiente función */
interface Goti {
  (ciudadanos:string[]): number;
}
const ciudadGotica: Goti = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}
//------------------------------------
/* Cree una interfaz que obligue crear una clase */
interface User {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: boolean;
  imprimirBio(): void;
}
// con las siguientes propiedades y métodos
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

class Person implements User {
  constructor(
    public nombre: string,
    public edad: number,
    public sexo: string,
    public estadoCivil: boolean,
    ){}

    imprimirBio() {
      const estadoCivilStr = this.estadoCivil ? 'casado/a' : 'soltero/a';
      console.log(`I'm ${this.nombre}, ${this.edad} years old, ${this.sexo}, and ${estadoCivilStr}.`);
    }
}

const client1 = new Person('Alejandro', 25, 'M', false);
client1.imprimirBio();