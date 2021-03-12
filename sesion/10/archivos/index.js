/* instala faker: npm i faker */
const faker = require('faker');
const { leerArchivo, escribirArchivo } = require('./manipularchivos');

leerArchivo();

const nombreAleatorio = faker.name.findName();
escribirArchivo(nombreAleatorio);

leerArchivo();