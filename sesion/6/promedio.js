//promedio de 5 nums por función anidada y por retorno

//por función anidada:

function prom(a,b,c,d,e){
    function suma(a,b,c,d,e){
        return a+b+c+d+e;
    }
    return suma(a,b,c,d,e)/5;
}
console.log(`el promedio es ${prom(1,2,3,4,5)}`, prom(1,2,3,4,5));


// por retorno

function promedio(a,b,c,d,e, retorno){
    const prom= (a+b+c+d+e)/5;
    retorno(prom);
}

function salida(parametro){
    console.log(`el promedio es ${parametro}`);
}

promedio(2,3,4,5,6, salida);


//sirve pero no por llamada sino metiendo datos a la función: 
/* 
function prom(a,b,c,d,e){
    console.log((a+b+c+d+e)/5);
}
function imprime(retorno){
    retorno(2,3,4,5,6);
}

imprime(prom);
 */

//solución en clase:
/*
const promedio = function (n1, n2, n3, n4, n5, respuesta) {
    const suma = function(){
      return n1 + n2 + n3 + n4 + n5;
    };
  
    const resultadoSuma = suma();
    const resultadoPromedio = resultadoSuma / 5;
    respuesta(resultadoPromedio);
  }

  const escribirResultado = function (parametro){
    console.log(`El resultado es ${parametro}`);
  };
  
  promedio(2,3,4,5,6, escribirResultado); */

