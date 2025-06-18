const readline = require("readline-sync");
let n1:number = parseFloat(readline.question("digite sua nota:"));
let n2:number = parseFloat(readline.question("digite sua nota:"));
let n3:number = parseFloat(readline.question("digite sua nota:"));
let n4:number = parseFloat(readline.question("digite sua nota:"));
console.log("sua média é:", (n1 + n2 + n3 + n4) /4 );