var botonEmpecemos = document.querySelector("#boton-empecemos");
var tableroJuego = document.querySelector("#tablero-juego");
var palabras = [];

// TRAE LAS PALABRAS DEL ARCHIVO JSON QUE SE ENCUENTRA EN GITHUB
botonEmpecemos.addEventListener("click", function(event){
    event.preventDefault();

    var xhr = new XMLHttpRequest;
    xhr.open("GET", "https://raw.githubusercontent.com/agustingomez1986/ahorcado/master/JSON/palabras.json");
    xhr.addEventListener("load", function(){
        var errorAjax = document.querySelector("#error-ajax");
        if(xhr.status == 200){
            errorAjax.classList.add("invisible");
            var respuestaArchivo = xhr.responseText;
            palabras = JSON.parse(respuestaArchivo);
            console.log("palabras " + palabras);
        } else {
            errorAjax.classList.remove("invisible");
        }
    });
    xhr.send();

    botonEmpecemos.classList.add("invisible");
    tableroJuego.classList.remove("invisible");
});