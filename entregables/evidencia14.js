const prompt = require("prompt-sync")();

function elecciones() {
    let votos = {uno:0, dos:0, tres:0, blenco:0};
    let totalVotos = 0;
    const clave = "1234";

    while (totalVotos < 50) {
        console.log("MENU ELECCIONES 2025\n\t1. Candidato Uno\n\t2. Candidato Dos\n\t3. Candidato Tres\n\t4. Voto en Blanco\n\t5. Cerrar elecciones");
        let opcion = prompt("Ingrese su voto\n");
        if (opcion === "5") {
            let claveIngrsada = prompt("Ingrese clave: ");
            if (claveIngrsada === clave) break;
        }

        if (opcion === "1") votos.uno++;
        else if (opcion === "2") votos.dos++;
        if (opcion === "3") votos.tres++;
        if (opcion === "4") votos.blenco++;
        totalVotos++;
    }
    console.log("Resultados: ", votos, "\nTotal votos: ", totalVotos);
}

elecciones();