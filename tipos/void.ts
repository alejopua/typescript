(()=>{

    // al realizar una asignación de tipo void, a una función hace referencia a que no retorna nada.

    function name():void {
        console.log('Hola Mundo');
    }
    name();

    const name2 = ():void => console.log('Hola Mundo 2');
    name2();

})();