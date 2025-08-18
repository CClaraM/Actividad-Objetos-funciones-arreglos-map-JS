function suma_promedio(arreglo) {
    let suma = arreglo.reduce((acc, num) => acc + num, 0);
    return ` la suma se los valores es ${suma} y su promedio es ${suma / arreglo.length}`
}

console.log(suma_promedio([2,4,6,8]));