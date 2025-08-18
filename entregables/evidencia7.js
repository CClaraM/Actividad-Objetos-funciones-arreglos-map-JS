function eliminarDuplicados(arreglo) {
    return [...new Set(arreglo)];
}

console.log(eliminarDuplicados([1,2,2,2,3,4,5,6,6,7]));