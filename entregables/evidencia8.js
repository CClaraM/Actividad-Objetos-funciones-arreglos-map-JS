function upperKey(arreglo) {
    return arreglo.map(arreglo => arreglo.toUpperCase());
}

function mayusculasManual(arreglo) {
    return arreglo.map(arreglo => {
        let resultado = "";
        for (let i = 0; i < arreglo.length; i++) {
            let code = arreglo.charCodeAt(i);
            if (code >= 97 && code <= 122) {
                resultado += String.fromCharCode(code - 32);
            }
        }
        return resultado
    });
}

console.log(upperKey(["juan","pedro","pepiTo"]));

console.log(`Trabajo mas manual ${mayusculasManual(["juan","pedro","pepiTo"])}`);