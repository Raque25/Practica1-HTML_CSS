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


var persona = {
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
console.log(persona[campo]);