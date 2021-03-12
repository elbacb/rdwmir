/* i */
const {encriptar} = require('./encriptar');

const argumentos = process.argv;
const cadenaEntrada = argumentos.slice(2).join(' ');

const hash = encriptar(cadenaEntrada);

console.log(cadenaEntrada);



