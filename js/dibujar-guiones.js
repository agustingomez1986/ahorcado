var mostrarGuiones = document.querySelector("#palabra-secreta");
var guiones = "";

function dibujarGuiones(cantidadLetras){
    guiones = "";  
    for (var i=0 ; i < cantidadLetras ; i++){
        guiones = guiones.concat("_");
    }
    
    mostrarGuiones.textContent = guiones;
}
