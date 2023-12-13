function printToConsole(target: Function): void {
    console.log(target);
}

const printToConsoleConditional = (print: boolean = false): Function => {
    if(print){
        return printToConsole;
    }
    return ()=>{};
}

const blockPrototype = function( target: Function ){
    Object.seal(target);
    Object.seal(target.prototype);
}

function checkValidityPokemonId() {
    return function(target: any, methodKey: string, descriptor: PropertyDescriptor){
        const originalMethod = descriptor.value;
        descriptor.value = ( id: number ) => {
            if ( id < 1 || id > 800 ) {
                return console.error('Invalid pokemon id, must be between 1 and 800');
            } else {
                return originalMethod(id);
            }
        }
    }
}

function readonly( isWritable: boolean = true ): Function {
    return function name( target: any, propertyKey: string) {

        const descriptor: PropertyDescriptor = {
            get(){
                console.log(this, 'getter');
                return 'nothing';
            },
            set( this, val){
                // console.log(this, val);
                Object.defineProperty( this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
            }
        }
        return descriptor;
    }
}

@blockPrototype
@printToConsoleConditional()
export class Pokemon {
    @readonly()
    private publicApi: string = 'https://pokeapi.co'

    constructor(public name: string){}

    @checkValidityPokemonId()
    pokemonSaved( id: number ){
        console.log(`saved in DB with id ${id}`);
    }
}