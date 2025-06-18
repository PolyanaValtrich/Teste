const readline = require("readline-sync");
let n: number = parseFloat(readline.question("Digite um numero:"));
let i: number = 1 
while (i<=n){
    if(i%2==0)
        console.log(i)
    i++
}

