const readline = require("readline-sync");
let n : number = parseFloat(readline.question("Digite um numero:")); // quando o usuario tiver q digitar um numero tem q colocar esse comando 
let i : number = 1
let soma = 0 // um valor q vai variar de acordo com o numero digitado pelo usuario
while (i <= n) {  // enquanto o valor i for menor e igual ao numero digitado ira ser verdadeiro 
    soma=soma+i // defini que a soma vale, 0 + 1 e o resultado será o novo valor da soma
    i++; // somara o novo valor da soma 
} 
console.log (soma) // vai printar o valor