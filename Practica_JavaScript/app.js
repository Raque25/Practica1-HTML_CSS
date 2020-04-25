/*var a = 1;
var b ="Raquel";

console.log(a);
console.warn(a);
console.error(a);
console.info(a);

console.log(a+a);*/


//mandará undefined si se ponen primero la ejecución de variables y después su declaración
//undefined != (null && error) ya que se pueden utilizar aun en consola
/*console.log(a);
console.log(b);
console.log(c);

var a = "Raquel";
var b = 3;
var c = true;*/

/*var num = 10; //primitivo
var str = "texto"; //primitivo
var bol = true; //primitivo
var und = undefined; //primitivo
var nulo = null; //primitivo

//escritura dinámica (las variables no estan amarradas a un tipo en particular)
num = str;
console.log(num);

bol = 10;
console.log(bol);

//objetos
var obj = {
    //nomenclatura de pares
    numero: 10, //propiedad
    texto: "otro texto", //si es una nomenclatura no cierra con punto y coma, si tiene más elementos, poner coma, último elemento no lleva nada

    objHijo: {
        numero2: 20,
        texto2: "otro texto 2"
    }
};

console.log(obj);*/

//variables primitivas se pasan por valor
/*var a = 10; //diferente valor
var b = a; //diferente valor
console.log("a: ", a);
console.log("b: ", b);

a = 20;
console.log("a: ", a);
console.log("b: ", b);

b = 30;
console.log("a: ", a);
console.log("b: ", b);

//objetos se pasan por referencia, el valor de un objeto referenciado a otro siempre tendrá el mismo valor
var c = {
    nombre: "María"
}
var d = c; //misma localidad de memoria
console.log("c: ", c);
console.log("d: ", d);

c.nombre = "José"
console.log("c: ", c);
console.log("d: ", d);

d.nombre = "Pedro"
console.log("c: ", c);
console.log("d: ", d);*/


/*var persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
    direccion: {
        calle: "La paz",
        numero: "123",
        referencias: {
            calle1: "Pipila",
            calle2: "Fernando Montes de Oca"
        }
    }
};

//la notación de punto nos ayuda a sacar datos específicos
//Va por niveles
console.log(persona.nombre);
console.log(persona.direccion);
console.log(persona.direccion.calle);

//agregar un nuevo campo
persona.direccion.zipcode = 38338;
console.log(persona.direccion);

//para evitar poner este tipo de líneas largas
console.log(persona.direccion.referencias.calle1);

//apunta a una direccion en específico
var referencias = persona.direccion.referencias;
referencias.telefono = "1234-5678";

console.log(persona);

//La notación por corchete se usa para manejo de datos de manera dinaámica
var campo = "edad";

console.log(persona["nombre"]);
console.log(persona[campo]);*/

/*var a = 30;

function primeraFuncion(){
    //Si se comenta la var 'a' de aquí, hace lo que se conoce como entorno global
    var a = 20;
    console.log(a);//Muestra el 'a' que se encuentra afuera
}
//Si se comenta el primer console, imprime 20,30; si se comenta el último console, imprime 30,20
console.log(a); //Imprime 30
primeraFuncion(); //Imprime 20
console.log(a); //Imprime 30

//Si se comentan ambas var 'a', manda error

var a = 40; //Si solo esta este var 'a', mandará undefined
//ya que existe en el entorno global pero 'a' en su momento no tiene un valor definido


//las funciones SIEMPRE regresan un valor
function segundaFuncion(){

}

var b = segundaFuncion();
console.log(b);// Imprime undefined

var c = segundaFuncion; //'c' es un objeto y no variable*/

/*function obtenerAleatorio(){
    return Math.random();
}
console.log(obtenerAleatorio() + 10);

function obtenerNombre(){
    return "Pepe";
}
console.log(obtenerNombre() + " Marquez");
var nombre = obtenerNombre();
console.log(nombre);

function retBooleano(){
    if(obtenerAleatorio() >= 0.5){
        return true;
    }
    else{
        return false;
    }
}
console.log(retBooleano());

if(retBooleano()){
    console.log("Es mayor a 0.5");
}
else{
    console.log("Es menor a 0.5");
}

function creaPersona(nombre, apellido){
    //es lo mismo poner esto ...
    //var obj = {};
    //return obj;
    
    //...que esto (cuando esta vacío)
    return{
        nombre : nombre,
        apellido : apellido
    }
}
var persona = creaPersona("Maria", "sanchez");
//es lo mismo esto...
console.log(persona);
//...que esto
console.log(persona.nombre);
console.log(persona.apellido);

function creaFuncion(){
    //Funcion anónima
    return function(nombre){
        console.log("Me creó " + nombre);

        return function(){
            console.log("Segunda creación de función");
        }
    }
}
var nuevaFuncion = creaFuncion();
nuevaFuncion(persona.nombre);

var segundaFuncion = nuevaFuncion(persona.nombre);
segundaFuncion();*/

//Las funciones se le pueden poner cualquier cosa que se le puede poner a un objeto, como propiedades y metodos
/*function a(){
    console.log("Función a");
}
a();
a.nombre="Maria";//regresa "Funcion a" a pesar de tener un valor de nombre
a.name="Maria";//regresa el nombre de la variable
a.apply()="Maria";//regresa el nombre "Maria"

a.direccion = {
    calle: "La paz",
    numero: "123",
    referencias: {
        calle1: "Pipila",
        calle2: "Fernando Montes de Oca"
    }
}*/

/*function Persona(){
    this.nombre = "Juan";
    this.apellido = "Galván";
    this.edad = "30";

    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }

    //console.log("paso por aquí");
}
var juan = new Persona(); //crea un objeto vacío (si lo esta en la función de arriba) pero sabe que es de tipo persona
//var juan = Persona(); //regresa un undefined porque se convirtió en una función normal, las variables se van al objeto global

console.log(juan);
console.log(juan.nombre);
console.log(juan.nombreCompleto());

function Persona2(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = "32";

    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }

}

var maria = new Persona2("Maria", "Mendoza");

console.log(maria.nombreCompleto());*/

var nombre = "Juan Carlos";

var persona = {
    nombre: "Raquel",
    apellido: "Velasco",

    imprimirNombre: function(){
        //console.log("Nombre completo");
        console.log(nombre); //Si se comenta la linea de arriba y se pone esto, mandará error de que no esta definido
                             //ya que espera que la variable nombre esté en el entorno global
        
        console.log(this); //con this, hace referencia al nombre encontrado dentro del objeto
        console.log(this.nombre + " " + this.apellido);
    },
    direccion:{
        calle: "La paz",
        obtenerCalle: function() {
            var self = this;

            console.log(this); //Imprime el objeto obtenerCalle
            console.log("La direccion es en " + this.calle); //Imprime el mensaje mas el valor de calle

            var nuevaDireccion = function() {
                //console.log(this); //Aparece window, porque esta fuera del objeto, referenciandose al entorno global
                console.log(self); //Como no se encuentra la variable self dentro, sube un nivel y lo busca
                console.log("La direccion es en " + self.calle);
            }

            nuevaDireccion();
        }
    }
};

//persona.nombre = "Andres"; //poniendo esto, hará referencia a este nombre y no el que esta dentro del objeto

persona.imprimirNombre();
persona.direccion.obtenerCalle();
