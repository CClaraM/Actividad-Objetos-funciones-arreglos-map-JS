const prompt = require("prompt-sync")();

let calificaciones = new Map();
calificaciones.set("ana", 90);
calificaciones.set("Luis", 85);
calificaciones.set("Carlos", 78);
console.log(calificaciones.get("Luis"));
console.log(calificaciones.get("puis"));