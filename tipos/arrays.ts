(()=>{
    let numbers: number[] = [1,2,3,4,5,6];
    let villians: string[] = ['hulk','ant man','captain america'];

    // numbers.push('123'); // Error
    // villians.push(1); // Error

    villians.forEach(v => console.log(v.toUpperCase()));
    numbers.map(n => console.log(n*10));
    numbers.forEach(n => console.log(n*2));
})();