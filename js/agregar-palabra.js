var bloqueAgregarPalabra = document.querySelector("#bloque-agregar-palabra");
var botonAgregarPalabra = document.querySelector("#agregar-palabra");
var botonConfirmarAgregar = document.querySelector("#confirmar-agregar");
var ingresoPalabra = document.querySelector("#ingreso-palabra");
var botonVolver = document.querySelector("#volver");


botonAgregarPalabra.addEventListener("click", function(){
    botonComenzar.classList.add("invisible");
    botonAgregarPalabra.classList.add("invisible");
    bloqueAgregarPalabra.classList.remove("invisible");
});

botonConfirmarAgregar.addEventListener("click", function(){
    if(!patron.test(ingresoPalabra.value)){
        alert("SOLO SE PERMITEN LETRAS MAYUSCULAS (sin acentos)");
    } else {
        verificarCoincidenciaPalabras(ingresoPalabra.value);
    }

});

botonVolver.addEventListener("click", function(){
    bloqueAgregarPalabra.classList.add("invisible");
    botonComenzar.classList.remove("invisible");
    botonAgregarPalabra.classList.remove("invisible");
});

function verificarCoincidenciaPalabras(nuevaPalabra){
    var palabraValidada = false;
    for(var i = 0 ; i < palabras.length ; i++){
        if(palabras[i] == nuevaPalabra){
            palabraValidada = false;
            alert("La palabra ya estaba en el listado");
            break;
        } else {
            palabraValidada = true;
        }
    }
    if(palabraValidada){
        palabras.push(nuevaPalabra);
        alert("La palabra fue ingresada");
        console.log("palabras " + palabras)
    }
}

