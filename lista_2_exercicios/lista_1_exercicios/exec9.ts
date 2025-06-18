const readline = require("readline-sync");

let n1:number = parseFloat(readline.question("digite um numero:"));

if (n1 % 2 == 0 ) 
    {console.log('Par')
}
else 
    {console.log('Impar')
}