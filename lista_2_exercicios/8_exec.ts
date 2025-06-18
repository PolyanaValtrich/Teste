const readline = require('readline-sync');
let sexo:string = (readline.question("Qual seu sexo?:"));
sexo=="m"|| sexo=="f"?
    sexo=="m"?console.log('Masculino'):console.log('Feminino'):
    console.log("sexo invalido");