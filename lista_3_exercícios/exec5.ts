const readline = require("readline-sync");
let n: number = parseFloat(readline.question("Digite um numero:"));
let fat: number = 1
let i: number = 0
while (i<n) {
    fat=fat* (n-i) // o numero (fat) vai ser multiplicado por n (o numero inserido), e fazer menos i 
    i++ //o valor de i sera sempre somado mais uma, voltando ao loop e fazendo o fatorial 
}
console.log (fat)