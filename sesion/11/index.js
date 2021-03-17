const { division } = require('./modulos/division');
const { encrypt, decrypt } = require('./modulos/encrypt');

const dividend = process.argv[2];
const divider = process.argv[3];

const result = division(dividend, divider);

console.log(
  `El resultado de dividir ${dividend} entre ${divider} es ${result}`
);

console.log(encrypt(['Hola', 'Mundo']));

// ejecutar con: node index.js 5 4 //El resultado de dividir 5 entre 4 es 1.25