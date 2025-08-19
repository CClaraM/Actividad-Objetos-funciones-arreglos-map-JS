function reemplazoValor(arreglo, iActual, valor) {
    let index = arreglo.indexOf(iActual);
    if ( index !== -1) arreglo[index] = valor;
    return arreglo;
}

console.log(reemplazoValor([1,2,3,4],4, 89));