(()=>{

    // siempre usar const a menos que se necesite reasignar el valor, por lo cual se usa let
    const name: string = 'Tony';

    const getName = (): string => {
        return name;
    }

    // console.log(getName());
})();