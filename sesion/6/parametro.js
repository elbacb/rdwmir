//parámetros por defecto

const division = function(dividendo=1, divisor=1){
    return dividendo/(divisor === 0 ? 1 : divisor);
}

const res0= division(5,0);
const res1= division(5,2);
const res2= division(5);
const res3=division();

console.log(res0);
console.log(res1);
console.log(res2);
console.log(res3);
