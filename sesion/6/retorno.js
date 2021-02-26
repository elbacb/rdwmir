// llamada retorno=callback. Es como una función anidada pero desde afuera
function saludo(nombre){
    console.log(`hola ${nombre}`)
}


function imprime(retorno){
    const nombre0='Yina'; //<-> borrar esta y en +1: retorno('Yina'))
    retorno(nombre0);
}
imprime(saludo);

//pasándole una función completa
imprime(function despedir(nombre){
    console.log(`chao ${nombre}`)
})


// funciona, parece aplicar al tema y ser alternativa:
function saluda(nombre){
    console.log(`kiubo ${nombre}`);
}

function imprimir(retorno){
    return retorno; //<-> return retorno('Farid') y en +2: imprimir(saluda)
}
imprimir(saluda('Farid'));

