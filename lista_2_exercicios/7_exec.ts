const readline = require('readline-sync');
let sexo:string = (readline.question("Qual seu sexo?"));
let h:number = parseFloat(readline.question('Qual sua altura?'));
sexo=="m"|| sexo=="f"?
    sexo=="m"?console.log((72.7*h)-58):console.log((62.1*h)-44.7):
    console.log("sexo invalido");
