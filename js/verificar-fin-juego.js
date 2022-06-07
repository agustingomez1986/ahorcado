var mensajeFinJuego = document.querySelector("#mensaje-fin-juego");
var finJuego = document.querySelector("#fin-juego");
var textoLetrasIcorrectas = document.querySelector("#texto-letras-incorrectas");

function verificarFinJuego(){
    if(errores == 6 || coincidencias == palabraSeleccionada.length){
        letrasIncorrectas.classList.add("invisible");
        textoLetrasIcorrectas.classList.add("invisible");
        mostrarGuiones.classList.add("invisible");
        finJuego.classList.remove("invisible");
        tecladoActivado = false;
        botonesJuegoComenzado.classList.add("invisible");
        
        
        if(errores == 6){
            mensajeFinJuego.classList.remove("juego-ganado");
            mensajeFinJuego.classList.add("juego-perdido");
            mensajeFinJuego.textContent = "Juego perdido";
        } else {
            mensajeFinJuego.classList.remove("juego-perdido");
            mensajeFinJuego.classList.add("juego-ganado");
            mensajeFinJuego.textContent = "Felicidades. Ganaste el juego!!";
        }
    }
}