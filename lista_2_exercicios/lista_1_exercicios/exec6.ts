const readline = require("readline-sync");
let n1:number = parseFloat(readline.question("digite um numero:"));
if (n1 >= 18){
    console.log ("Você é maior de idade")
}
else {
    console.log ("Você é menor de idade")
}