const readline = require('readline-sync');
let Pp:number = parseFloat(readline.question('peso de peixes:'))
let exc:number = Pp-50;
    Pp>50?
    console.log('O valor da multa sera de:',exc*4):console.log('O peso é adequado');
