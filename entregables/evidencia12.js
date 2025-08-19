const prompt = require("prompt-sync")();

let productos = new Map();
let historial = [];

for (let i = 0; i< 4; i++) {
    let nombre = prompt("Ingrese producto:\n");
    let precio = parseInt(prompt("Ingrese precio \n"));
    productos.set(nombre, precio);
    historial.push(nombre);
}

let unicos = new Set(historial);

console.log("Productos unicos: ", unicos);
console.log("Precios:", productos);
console.log("Historial:", historial);