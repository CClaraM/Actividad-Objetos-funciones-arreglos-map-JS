const prompt = require("prompt-sync")();
let arr = [1,2,2,3,4,4,5];
let unicos= new Set(arr);
console.log([...unicos]);
console.log(new Set(arr));