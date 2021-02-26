// cierres=closures. Funciones anidadas
// "use strict" //modo estricto de javascript
function sumaCuadrado(a,b){
    function cuadrado(n){
        return n*n;
    }
    return cuadrado(a)+  cuadrado(b);
}

const n1= sumaCuadrado(8,2);
const n2= sumaCuadrado(2,-2);
const n3= sumaCuadrado(-11,7);

console.log(n1, n2, n3 );



// variable nombre la busca en las entradas de la función superior
function saludar(nombre, apellido){
    function hola(){
        return nombre;
    }
    return 'qué tal' +hola();
    // return `qué tal ${nombre} ${apellido}`;
}
// contexto léxico y contexto de ejecución
const saludo = saludar;
console.log(saludo);

const saludoaJuana= saludar(" Juana", "Mateo");
console.log(saludoaJuana);



function promedio(nombre, apellido, retorno){
    const nombrecompleto= `${nombre} ${apellido}`;
    retorno(nombrecompleto);
}
promedio('Ángela', 'Camila', function salida(parametro){
    console.log(`el nombre completo es ${parametro}`);
});