// trae edad de las personas que hablan inglés
const persona={
    "nombre": "ana",
    "sexo":"m",
    "edad":"23",
    "idioma":["es","en"], 
    "verEdad": function(){
        console.log("la edad de "+this.nombre+" es "+this.edad);
    }
}

const persona1={
    "nombre": "sergio",
    "sexo":"m",
    "edad":"32",
    "idioma":["es"], 
    "verEdad": function(){
        console.log("la edad de "+this.nombre+" es "+this.edad);
    }
}

const persona2={
    "nombre": "patricia",
    "sexo":"f",
    "edad":"27",
    "idioma":["en"], 
    "verEdad": function(){
        console.log("la edad de "+this.nombre+" es "+this.edad);
    }
}

const ingles=function(p){if (p.idioma=="en"){return p.verEdad()}}; 
const hablan = [persona,persona1, persona2].map(ingles);
