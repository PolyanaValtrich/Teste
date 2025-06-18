const readline = require("readline-sync");
let n: number = parseFloat(readline.question("Digite um numero:"));
let i: number =2 
let p = true
if (n<2)
    p= false;
else{
    while(i<n){ //Esse comando repete tudo que estiver dentro dele enquanto i for menor que n, ele vai testar todos os números entre 2 e n
        if(n%i === 0){ // n% isso é o resto da divisão de n por i. === Ele compara valores e tipos. o resto da divisão é exatamente zero
        p= false //Se o número n for divisível por algum número entre 2 e n-1, ele não é primo.
            break;
        }
        i++ // o i q valei 2 vai valer sempre mais um quando o codigo for rodado
    }
}
console.log(`${n} ${p ? "é primo" : "não é primo"}`); //${n}: mostra o número digitado e ${p ? “é primo” : “não é primo”}