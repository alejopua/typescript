(()=>{
    let batman:string = 'Batman';
    let spiderman:string = "Spiderman";
    let blackwidow:string = `Black Widow`;

    console.log(`They are ${batman.toUpperCase()}, ${spiderman} and ${blackwidow}`);
    console.log(batman[30]?.toLowerCase() || 'No existe') // null check operator ?.
})();