function contartPar(arreglo) {
    return arreglo.filter(num => num % 2 === 0).length;
}

console.log(contartPar([1,2,3,4,5,6,7,8,9]));