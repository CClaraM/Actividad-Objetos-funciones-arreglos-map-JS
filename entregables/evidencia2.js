const prompt = require("prompt-sync")();

function contadorVocales(texto){
    let contador=0;
    const vocales = "aeiouAEIOU";
    for (let char of texto){
        if (vocales.includes(char)) contador++;
    };
    return contador;
}

input = prompt("Ingresa un texto para contar sus vocales\n");
console.log(contadorVocales(input));