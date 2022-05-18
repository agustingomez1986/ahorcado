var botonStart = document.querySelector("#boton-empecemos");
var tableroJuego = document.querySelector("#tablero-juego");
var botonComenzar = document.querySelector("#boton-comenzar");

botonStart.addEventListener("click", function(event){
    event.preventDefault();
    botonStart.classList.add("invisible");
    tableroJuego.classList.remove("invisible");
    botonComenzar.classList.remove("invisible");
});