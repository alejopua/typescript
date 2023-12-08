(()=>{
    class Cal {
        constructor(private a: number, private b: number){}

        public suma(): string{
            const operation = 'suma';
            const rta = this.a + this.b;
            
            return `${this.msj(rta, operation)}`;
        }

        public resta(): string{
            const operation = 'resta';
            const rta = this.a - this.b;
            
            return `${this.msj(rta, operation)}`;
        }

        public multiplicacion(): string{
            const operation = 'multiplicacion';
            const rta = this.a * this.b;
            
            return `${this.msj(rta, operation)}`;
        }

        public division(): string{
            const operation = 'division';
            const rta = this.a / this.b;
            
            return `${this.msj(rta, operation)}`;
        }

        protected msj(rta: number, operation: string): void {
            if (operation === 'division' && this.b === 0) {
                console.log(`No se puede dividir por 0`);
            } else if (operation === 'suma' || operation === 'resta' || operation === 'multiplicacion' || operation === 'division') {
                console.log(`El resultado de la ${operation} es ${rta}`);
            }
        }


    }

    const rta = new Cal(2,0);
    // rta.suma();
    // rta.resta();
    // rta.multiplicacion();
    // rta.division();

})();