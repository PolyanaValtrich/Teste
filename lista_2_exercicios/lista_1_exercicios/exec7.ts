const readline = require("readline-sync");
let n1:number = parseFloat(readline.question("digite um numero:"));
if (n1 >= 9){
    console.log ("Excelente!")
}
if (n1 >= 7 && n1 <= 8.9 ){
    console.log ("Bom!")
}
if (n1 > 5 && n1 <= 6.9) {
    console.log ("Regular.")
}
if (n1 < 5) 
    {console.log ("Precisa melhorar.")
}