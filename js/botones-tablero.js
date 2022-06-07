var juegoComenzado = document.querySelector("#juego-comenzado");
var botonesTablero = document.querySelector("#botones-tablero");
var botonComenzar = document.querySelector("#comenzar");
var tecladoActivado = false;
var palabraSeleccionada = "";


botonComenzar.addEventListener("click", jugar);

function jugar(){
    reinicioVariables();
    tecladoActivado = true;

    botonesTablero.classList.add("invisible");
    botonesJuegoComenzado.classList.remove("invisible");
    
    var cantidadPalabras = palabras.length;
    console.log("cantidad palabras: " + cantidadPalabras);
    palabraSeleccionada = palabras[seleccionarPalabraAleatoria(cantidadPalabras)];
    console.log("palabra seleccionada: " + palabraSeleccionada);
    dibujarGuiones(palabraSeleccionada.length);
            
    juegoComenzado.classList.remove("invisible");
}

function seleccionarPalabraAleatoria(cantidadPalabras){
    return aleatorio = Math.round(Math.random()*cantidadPalabras);
}