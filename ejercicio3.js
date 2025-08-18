const prompt = require("prompt-sync")();

let cuenta = {
    titular: "Ana",
    saldo: 1500,
    mostrarSaldo: function(){
        return `El saldo de ${this.titular} es $${this.saldo}`
    }
};

console.log(cuenta.mostrarSaldo());