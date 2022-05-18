var botonComenzar = document.querySelector("#comenzar");

botonComenzar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest;
    xhr.open("GET", "C:\Users\'elgomalatinoel'\Desktop\ONE\Challenge 2\JSON\palabras.json"/*"https://agustingomez1986.github.io/ahorcado/palabras.json"*/);
    xhr.addEventListener("load", function(){
        var errorAjax = document.querySelector("#error-ajax");
        if(xhr.status == 200){
            errorAjax.classList.add("invisible");
            var respuestaArchivo = xhr.responseText;
            var palabras = JSON.parse(respuestaArchivo);
            var cantidadPalabras = palabras.length;
            var palabraSeleccionada = palabras[seleccionarPalabraAleatoria(cantidadPalabras)];

        } else {
            errorAjax.classList.remove("invisible");
        }
    });
    xhr.send();
    console.log(respuestaArchivo);
    console.log(palabras);
    console.log(cantidadPalabras);
    console.log(palabraSeleccionada);

});

function seleccionarPalabraAleatoria(cantidadPalabras){
    return aleatorio = Math.round(Math.random()*cantidadPalabras);
}