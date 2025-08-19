const prompt = require("prompt-sync")();

const jugadores = [
    {jugador:"Pepe",puntos:78},
    {jugador:"Pepa",puntos:23},
    {jugador:"Juan",puntos:54},
    {jugador:"Camila",puntos:38},
    {jugador:"Martina",puntos:18},
    {jugador:"Mario",puntos:57},
    {jugador:"Pedro",puntos:49},
    {jugador:"Camilo",puntos:50},
    {jugador:"Carolina",puntos:28}
]

let principiante=[];
let intermedio=[];
let avanzado=[];

function clasificar(nombre){
    if (nombre.puntos < 30) {
        principiante.push(nombre.jugador);        
    } else if(nombre.puntos < 50) {
        intermedio.push(nombre.jugador);
    } else if (nombre.puntos >= 50 ) {
        avanzado.push(nombre.jugador);
    }
};
jugadores.forEach(clasificar);

console.log("Principiantes",principiante);
console.log("Intermedio",intermedio);
console.log("Avanzado",avanzado);