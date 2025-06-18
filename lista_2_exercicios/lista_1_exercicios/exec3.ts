const readline = require("readline-sync");
let n1:number = parseFloat(readline.question("digite um numero:"));
let n2:number = parseFloat(readline.question("digite outro numero:"));

console.log("sua soma é:", n1 + n2); 
console.log("sua subtracao:", n1 - n2);
console.log("sua divisao é:", n1 / n2);
console.log("sua multiplicacao é:", n1 * n2);