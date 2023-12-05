(()=>{
    let anything:any;

    anything = 20.54693826;
    let rta = (anything as number).toFixed(2); // casting
    console.log({rta}); 

    anything = 'Hola mundo';
    let rta2 = (anything as string).toUpperCase(); // casting
    console.log({rta2}); 
})();