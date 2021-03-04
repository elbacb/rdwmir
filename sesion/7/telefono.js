/* validar dos números, que no tengan espacios, el primero es un fijo (7 dígitos) y el segundo es celular (10 dígitos)*/

console.log(validar('3351905','3135101955'));

function validar(fijo, celular){
    const num1=fijo.split(' ');
    const num2=celular.split(' ');
    console.log(num1, num2);
    if (num1.length>1 || num2.length>1){
        return 'los números no deben contener espacios';
    }
    else{
        if(fijo.length==7 && celular.length==10){
            return 'entradas válidas';
        }
        else{
            return 'entradas inválidas';  
        }
    }
}