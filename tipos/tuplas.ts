(()=>{
    let hero: [string, number, boolean] = ['Ant man', 400, true];
    // hero[0] = 123; // Error
    // hero[1] = true; // Error
    // hero[2] = 'Guason'; // Error

    hero[0] = 'Guason';
    hero[1] = 300;
    hero[2] = false;
    console.log({hero});

})();