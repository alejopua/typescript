"use strict";
(() => {
    // type never - siempre retorna un error
    const error = (msg) => {
        throw new Error(msg);
    };
    error('Error critico...');
})();
