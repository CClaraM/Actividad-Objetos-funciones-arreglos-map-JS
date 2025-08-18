function getRandomValue(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let pass = [];
pass.push(getRandomValue(33, 47));
for (let index = 0; index < 3; index++) {
    pass.push(getRandomValue(65, 90));
    pass.push(getRandomValue(97, 122));
    pass.push(getRandomValue(48, 57));
}
pass.push(getRandomValue(58, 64));
//let num = getRandomValue(97, 122);
//let char = String.fromCharCode(num);

console.log(`Tu contrasenia generada es ${String.fromCharCode(...pass)}`);