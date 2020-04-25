function Jugador (nombre){ //Funcion de primera clase con parametro
    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;

    this.curar = function (jugadorObjetivo){ //metodo
        if(this.sp >= 40) {
            this.sp -= 40;
            jugadorObjetivo.pv = jugadorObjetivo.pv + 20;
        }
        else{
            console.info(this.nombre + " no tiene suficiente sp");
        }
        this.estado(jugadorObjetivo); //llamamos una funcion que se encuentra dentro
    }
    this.tirarFlecha = function (jugadorObjetivo){ //metodo
        if(jugadorObjetivo.pv >= 40){
            jugadorObjetivo.pv -= 40;
            this.estado(jugadorObjetivo);
        }
        else{
            jugadorObjetivo.pv=0;
            console.error(jugadorObjetivo.nombre + " murió!!!");
        }
    }
    this.estado = function (jugadorObjetivo){ //metodo
        console.info(this);
        console.info(jugadorObjetivo);
    }
};

var gandalf = new Jugador("Gandalf"); //crear e inicializar
var legolas = new Jugador("Legolas");

console.log(gandalf); //impresion en consola
console.log(legolas);

gandalf.curar(legolas); //se empieza a utilizar los métodos
//console.log(gandalf);
//console.log(legolas);