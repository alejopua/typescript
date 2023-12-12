
namespace Validations {
    export const plus = (a: number, b: number):number =>{
        return a+b;
    }

    export const rest = (a: number, b: number):number =>{
        return a-b;
    }
}

console.log(Validations.plus(4,4));