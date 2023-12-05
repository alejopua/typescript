(()=>{
    // type never - siempre retorna un error
    const error = (msg: string): never => {
        throw new Error(msg);
    }

    error('Error critico...');

})();