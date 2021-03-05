const cadena= 'rojo, amarillo, naranja';
const arreglo = cadena.split(',');

const numero =[1,2,3,4,5];
//mapea o itera sobre elementos
numero.map(x=>console.log(`el resultado es ${x*x}`));

// asignación de la salida del mapping
// se omite paréntesis y corchetes si solo devuelve una expresión
const operados = numero.map(x=>x**3.2-1);
console.log(operados);

// declarando función que se pasa como parámetro
function raiz(x){
    const rta=x**(1/3);
    return rta;
}
const operados1 = numero.map(raiz);
console.log(operados1);

// map directo sobre el arreglo y no sobre la variable
const nega=[true, false,false, false].map(x=>!x);
console.log(nega);

// filtro
const filtro=[-1, 3, 6, 21, 17, 34, 18, 0].filter(x=>x<19);
console.log(filtro);

// find, primer elemento
const porp=['amauri', 'nicolás', 'ernesto', 'pepe', 'onias', 'paola'].find(x=>x==='ernesto');
console.log(porp);

// include, para cuando encuentra
const nom=['amauri', 'pepe', 'onías', 'paola'].includes('onías');
console.log(nom);

// push, modifica (incluso a const)
const arr=[9,10,3,4,8];
arr.push(-1);
console.log(arr);

// sort, ordena
arr.sort();
console.log(arr);
// al revés
arr.reverse();
console.log(arr);

//join
const nombre = ["Jesus", "Estrada"].join(" ");
console.log(nombre);
//concat
const animalesSalvajes = ["leon", "pantera"];
const animalesDomesticos = ["perro", "gato"];
const animales = animalesSalvajes.concat(animalesDomesticos);
console.log(animales);

// splice, slice: eliminar
arr.splice(1,1);
console.log(arr);


const animales1 = ["perro", "gato", "tigre", "caballo", "oveja"];

console.log(animales1.slice(0, 2).concat(animales1.slice(3, 5)));

const animales2 = ["perro", "gato", "tigre", "caballo", "oveja"];
console.log(animales2.splice(2, 5));

const animales3 =["perro", "gato", "tigre", "caballo", "oveja"];
const removed = animales3.splice(2, 1);
console.log(removed);
console.log(animales3);

//shift: primer elemento
console.log(animales.shift());
console.log(animales);
//pop: último elemento
console.log(animales.pop());
console.log(animales);

console.log(new Date());
console.log((new Date()).toLocaleString());


//reemplazar un elemento 
const elementos = [1, 2, 4, 5];
elementos[3] = 8;
console.log(elementos);