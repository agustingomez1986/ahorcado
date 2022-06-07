var letrasIngresadas = "";

function verificarRepeticionLetra(letraNueva){
    var letraCoincide = true;

    for (var x = 0 ; x <= letrasIngresadas.length ; x++){
        if(letraNueva == letrasIngresadas[x]){
            letraCoincide = true;
            break;
        } else {
            letraCoincide = false;
        }
    }

    if(!letraCoincide){
        letrasIngresadas = letrasIngresadas.concat(letraNueva);
    }
    
    return letraCoincide;
}