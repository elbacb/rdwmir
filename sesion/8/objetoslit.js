/* combinación de objetos y arreglos */
const persona={
    "nombre": "ana",
    "apellido":"pulido",
    "edad":"31",
    "idioma":["es","en", "rs"],
    "telefonos":{
        "fijos":[3248746,3214237],
        "celulares":[3212145836, 3124877157]},
    "nombrecompleto": function(){
        return `${this.nombre} ${this.apellido}`
    }
};

persona.apellido="perez";
delete persona.idioma[1];
console.log(persona);
console.log(persona.telefonos.fijos[1]);

const obtenerIdioma= idioma => idioma==="en" ? "inglés":"español";
const idiomas = persona.idioma;
const respuesta=idiomas.map(obtenerIdioma);
console.log(respuesta);