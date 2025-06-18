const readline = require("readline-sync");

while (true) {
let n1:number = parseFloat(readline.question("Primeiro numero:"));
let Op: string = readline.question("Escolha sua operacao (+,-,*,/) :")
let n2:number = parseFloat(readline.question("Segundo numero:"));

if (isNaN (n1) || isNaN (n2)){
    console.log ("Erro, tente novamente")
}
if (Op == "+"){
    console.log (n1 + n2)
}
else if (Op == "-")
    {console.log  (n1 - n2)
}
else if (Op == "*") 
    {console.log ( n1 * n2 )
}
else if (Op == "/") 
    {console.log ( n1 / n2 )
        if (n1 == 0 || n2 == 0)
            console.log ("erro")
}
let poly = readline.question("Deseja continuar, s/n:").toLowerCase();
if (poly == "n") {
  console.log ("Voce terminou de usar a calculadora")
  break
}
}
