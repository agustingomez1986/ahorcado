var errores = 0;
var coincidencias = 0;
var letrasIncorrectas = document.querySelector("#letras-incorrectas");

function verificarCoincidencia(){
    var coincidencia = false;
    var posicionLetraCorrecta = [];
    for (var i=0 ; i < palabraSeleccionada.length ; i++){
        if (keyValue == palabraSeleccionada[i]){
            coincidencia = true;
            posicionLetraCorrecta.push(i);
            coincidencias = coincidencias+1;
        }
    }

    if(!verificarRepeticionLetra(keyValue)){
        if (coincidencia){
            ingresoCorrecto(posicionLetraCorrecta);
        } else {
            ingresoIncorrecto();
            errores = errores+1;
            dibujarAhorcado(errores);
        }

        verificarFinJuego();
    } else {
        alert("La letra ya había sido ingresada. Ingrese otra letra");
    }
}

function ingresoCorrecto(posicion){
    var auxiliarGuiones = "";

    for(var i = 0 ; i < posicion.length ; i++){
        auxiliarGuiones = "";
        for(var j = 0 ; j < palabraSeleccionada.length ; j++){
            if(posicion[i] == j){
                auxiliarGuiones = auxiliarGuiones.concat(palabraSeleccionada[j]);
            } else {
                auxiliarGuiones = auxiliarGuiones.concat(guiones[j]);
            }
        }
        guiones = auxiliarGuiones;        
    }
    
    mostrarGuiones.textContent = guiones;
}

function ingresoIncorrecto(){
    letrasIncorrectas.textContent = letrasIncorrectas.textContent.concat(keyValue);
}