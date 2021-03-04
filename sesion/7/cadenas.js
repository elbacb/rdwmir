nombre='nemencia'

const ultimaletra= nombre[nombre.length-1];
console.log(ultimaletra);

//split
const cadena = 'hola mundo'
const arr = cadena.split(' ');// arreglo=['hola', 'mundo']
console.log(arr[1]);

const cadena1 = 'juanita limaña, sergio';
const nombre1 = cadena1.split(`,`)[1];
console.log(nombre1)

// encuentra subcadena, devuelve -1 si no existe, devuelve posicion si existe
const navega = `google, chrome`;
const existe =navega.indexOf(`google`);
console.log(existe);

const correo =`JESUSESTRADA@Gmail.com`
console.log(correo.toLowerCase());

//split join
const telefono ='300 1245 781'; //split->['300','1245','781']
console.log(telefono.split(' ').join(''))

// starswith endswith
console.log(nombre.startsWith('n'));

