/* Clases */
//Personas: nombre, apellido, edad, correo, etc ...
//Empleados => Personas
//Usuarios => Personas
//Proceso
//...

//String, Int, Math, Array, Object

//Clase Persona tiene un Constuctor
const Persona = function (nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.getNombre = function () {
      return this.nombre;
    };
    this.getApellido = function () {
      return this.apellido;
    };
    this.getNombreCompleto = function () {
      return `${this.nombre} ${this.apellido}`;
    };
    this.setNombre = function (nombre) {
      this.nombre = nombre;
    };
    this.setApellido = function (apellido) {
      this.apellido = apellido;
    };
  };
  //Objeto objetoPersona
  const objetoPersona = new Persona('Juana', 'Gómez');
  console.log(objetoPersona.nombre);
  console.log(objetoPersona.getNombre());
  
  const objetoLiteralPersona = {
    nombre: 'Juana',
    apellido: 'Gómez',
    getNombre: function () {
      return this.nombre;
    },
    getApellido: function () {
      return this.apellido;
    },
    getNombreCompleto: function () {
      return `${this.nombre} ${this.apellido}`;
    },
    setNombre: function (nombre) {
      this.nombre = nombre;
    },
    setApellido: function (apellido) {
      this.apellido = apellido;
    },
  };
  
  console.log(objetoLiteralPersona.nombre);
  console.log(objetoLiteralPersona.getNombre());
  
  //Object.keys
  const keys = Object.keys(objetoLiteralPersona);
  console.log(keys);
  
  //Object.values
  const values = Object.values(objetoLiteralPersona);
  console.log(values);
  
  //Object.assign
  const destino = { n1: 1, n2: 2 };
  const fuente = { n3: 3, n4: 4 };
  Object.assign(destino, fuente);
  console.log(destino);

// Tu misión en este reto es crear una función constructora llamada Bus que herede
//  los atributos y métodos de Car (que ya está definida) y tenga un método
//  adicional llamado beep que retorne la cadena "BEEP!".
// no solucionado como se esperaba "Se esperaba que Car fuera el prototipo de Bus"

function Car() {
  this.velocity = 0;
}

Car.prototype.accelerate = function(amount) {
this.velocity += amount || 1;
return this;
}
Car.prototype.break = function(amount) {
this.velocity -= amount || 1;
return this;
};


function Bus() {
      const car= new Car();
      this.velocity = car.velocity;
      this.accelerate=car.accelerate;
      this.break=car.break;
      this.beep=function (){
          return 'beep';
      };
};

var bus = new Bus();
console.log(bus.velocity);

bus.accelerate();
console.log(bus.velocity);

bus.accelerate(2);
console.log(bus.velocity);

bus.break();
console.log(bus.velocity);

bus.break(2);
console.log(bus.velocity);

console.log(bus.beep());