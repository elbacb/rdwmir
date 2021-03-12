// encriptar una cadena usando bcrypt

const { encriptar, comparar } = require('./encriptar');

const argumentos = process.argv;
const cadenaEntrada = argumentos.slice(2).join(' ');

const hash = encriptar(cadenaEntrada);
const comparacion = comparar(cadenaEntrada, hash);
const comparacion1 = comparar('otraCadena', hash);


console.log(cadenaEntrada);
console.log(hash);
console.log(comparacion);
console.log(comparacion1);
