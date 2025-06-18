const readline = require("readline-sync");
let n1:number = parseFloat(readline.question("Quanto voce quanha por hora?:"));
let n2:number = parseFloat(readline.question("Quanto voce trabalha por hora no mês:"))
console.log ("O seu salário é", (n1 * n2))
