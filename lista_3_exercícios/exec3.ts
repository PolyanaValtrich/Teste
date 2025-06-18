const readline = require("readline-sync"); // as duas primeiras linhas do codigo são essencial
let n: number = parseFloat(readline.question("Digite um numero:"));
let i: number = 0
let mutiplicacao = 1
while (i<10){
    i++;
    console.log (n*i)
}
