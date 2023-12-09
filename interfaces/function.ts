(()=>{
    interface operation {
        (a: number, b: number): string;
    }

    const sum: operation = (a: number, b:number): string => {
        const rta = a + b;
        return `Result: ${rta}`;
    }

    // console.log(sum(5, 5));
})()