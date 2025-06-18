const readline = require("readline-sync");
let n1:number = parseFloat(readline.question("digite o seu numero inteiros:"));
let n2:number = parseFloat(readline.question("digite o seu numero inteiros:"));
let n3:number = parseFloat(readline.question("digite o seu numero real:"));
console.log ("primeiro calculo:" , (n1*2 )+ (n2/2));
console.log ("segundo calculo:" , (n1*3)+ n3 )
console.log ("terceiro calculo:" , (n1*n1*n1))
