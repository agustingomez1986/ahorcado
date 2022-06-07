function reinicioVariables(){
    finJuego.classList.add("invisible");
    tableroJuego.classList.remove("invisible");
    botonesTablero.classList.add("invisible");
    esqueletoBody.classList.add("invisible");
    esqueletoHead.classList.add("invisible");
    esqueletoLeftArm.classList.add("invisible");
    esqueletoLeftLeg.classList.add("invisible");
    esqueletoRightArm.classList.add("invisible");
    esqueletoRightLeg.classList.add("invisible");
    letrasIngresadas = "";
    errores = 0;
    coincidencias = 0;
    letrasIncorrectas.textContent = "";
    letrasIncorrectas.classList.remove("invisible");
    textoLetrasIcorrectas.classList.remove("invisible");
    mostrarGuiones.classList.remove("invisible");
}