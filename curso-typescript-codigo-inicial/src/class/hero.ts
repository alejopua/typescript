import powers from "./powers";

class Hero {
    constructor(public name: string, public powerId: number, public age: number) {}

    get power(): (string | object) {
        //? is optional chaining - sirve para decirle a typescript que si no encuentra el valor de la izquierda, use el de la derecha.
        //|| is nullish coalescing - sirve para decirle a typescript que si no encuentra el valor de la izquierda, use el de la derecha.
        // ! is non-null assertion operator - sirve para decirle a typescript que no se preocupe que no va a ser null.

        return powers.find((power) => power.id === this.powerId)?.name || 'no power';
    }
}

export default Hero;