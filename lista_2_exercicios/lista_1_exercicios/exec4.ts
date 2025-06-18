const readline = require("readline-sync");
let n1:number = parseFloat(readline.question("digite um numero:"));
if (n1 > 10 && n1< 20){
    console.log ("verdadeiro")
}
else {
    console.log ("falso")
}
