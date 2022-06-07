var reiniciarFJ = document.querySelector("#reiniciar-fj");
var menuPrincipalFJ = document.querySelector("#menu-principal-fj");

reiniciarFJ.addEventListener("click", jugar);
menuPrincipalFJ.addEventListener("click", menu);

function menu(){
    reinicioVariables();
    juegoComenzado.classList.add("invisible");
    botonesTablero.classList.remove("invisible");
    tecladoActivado = false;
}