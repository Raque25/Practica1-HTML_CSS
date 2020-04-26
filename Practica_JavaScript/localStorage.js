//Almacenamiento/Almacenamiento local
//Muestra solamente Strings

//guardar_localStorage();
obtener_localStorage();

function obtener_localStorage(){
    if(localStorage.getItem("nombre")){ //Clausula para verificar que haya algo en el local storage
        //Sé que existe el nombre en el local storage
        let nombre = localStorage.getItem("nombre"); //Imprime Maria
        //let persona = localStorage.getItem("persona"); //Muestra solo un tipo arreglo
        let persona = JSON.parse(localStorage.getItem("persona")); //Lo transforma a un objeto
        console.log(nombre);
        console.log(persona);
    }
    else{
        console.log("No hay entradas en el local Storage");
    }
    
    
}

function guardar_localStorage(){
    //objeto complejo
    let persona = {
        nombre: "Raquel",
        edad: 22,
        correo: "16031134@itc.edu.mx",
        coords: {
            lat: 25,
            lng: -23
        }
    };

    let nombre = "Maria";

    //para grabar en el local storage
    localStorage.setItem("nombre", nombre); //Muestra Maria
    //localStorage.setItem("persona", persona); //Muestra object porque se grabó un objeto
    localStorage.setItem("persona", JSON.stringify(persona)); //Muestra todos los datos de nombre, edad y correo
}