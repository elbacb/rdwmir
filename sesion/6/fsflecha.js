// funciones flecha, ES6 Javascript2015
// sirve como simplificación de la escritura
const saludarSinparametro = () => {
    return `hola`;
};
const saludarUnparametro = (nombre) => {
    return `hola ${nombre}`;
};
const saludarUnparametroSinparentesis = nombre => {
    return `hola ${nombre}`;
};
const saludarDosparametros = (nombre='-', apellido='-') => {
    return `hola ${nombre} ${apellido}`;
};

// si es expresión no necesita return
const saludarRetornaexpresion = nombre => `hola ${nombre}`;

const nombre='Eusebio';
console.log(saludarSinparametro())
console.log(saludarUnparametro(nombre))
console.log(saludarUnparametroSinparentesis(nombre))
console.log(saludarDosparametros())
console.log(saludarRetornaexpresion(nombre))
