var keyValue;
const patron = /[A-Z\Ñ]/;

document.addEventListener('keypress',(event)=>{
    keyValue = event.key;
    if(tecladoActivado && event.keyCode != 13){
        if(!patron.test(keyValue)){
            alert("SOLO SE PERMITEN LETRAS MAYUSCULAS (sin acentos)");
        } else {
            verificarCoincidencia();
        }
    }
}, false);