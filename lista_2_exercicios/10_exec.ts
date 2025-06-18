const readline = require("readline-sync");
let n1:number = parseFloat(readline.question("digite o primeiro preco:"));
let n2:number = parseFloat(readline.question("digite o segundo preco:"));
let n3:number = parseFloat(readline.question("digite o terceiro preco:"));
let MenorPreco: number;

if (n1 < n2 && n1<n3) {
    MenorPreco= n1
}
else if (n2 < n1 && n2 < n3) {
    MenorPreco= n2
}
else {
    MenorPreco= n3
}
console.log ("Qual o produto devo comprar?");
