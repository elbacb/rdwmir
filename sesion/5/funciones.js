// hoisting (ascensión): las variables tipo var, js las pone arriba del documento, aunque uno las ponga en otra parte, la asignación de var sí la deja donde la ponga

function imc(peso, altura){
    const res=peso/altura**2;
    return res;
}

const pesoYair=70;
const alturaYair=1.7;
const imcYair=imc(pesoYair, alturaYair);
console.log(`el imc de Yair es ${imcYair}`);


const imcItza=18;
function condicion(imcpersona){
    if(imcpersona<18.5){
        return 'bajo peso';
    }
    else if(imcpersona>25 && imcpersona<30){
        return 'sobrepeso';
    }
    else if(imcpersona>30){
        return 'obesidad';
    }
    
    else{
        return 'peso normal';
    }
}

console.log(`Yair tiene ${condicion(imcYair)}`)
console.log(condicion(15))
console.log(condicion(20))
console.log(condicion(26))
console.log(condicion(35))
console.log(`Itza tiene ${condicion(imcItza)}`)
