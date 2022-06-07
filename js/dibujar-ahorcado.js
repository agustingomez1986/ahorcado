var esqueletoHead = document.querySelector("#esqueleto-head");
var esqueletoBody = document.querySelector("#esqueleto-body");
var esqueletoLeftArm = document.querySelector("#esqueleto-left-arm");
var esqueletoLeftLeg = document.querySelector("#esqueleto-left-leg");
var esqueletoRightArm = document.querySelector("#esqueleto-right-arm");
var esqueletoRightLeg = document.querySelector("#esqueleto-right-leg");


function dibujarAhorcado(cantErrores){
    switch (cantErrores){
        case 1:
            esqueletoHead.classList.remove("invisible");
            break;
        case 2:
            esqueletoBody.classList.remove("invisible");
            break;
        case 3:
            esqueletoLeftLeg.classList.remove("invisible");
            break;
        case 4:
            esqueletoRightLeg.classList.remove("invisible");
            break;
        case 5:
            esqueletoLeftArm.classList.remove("invisible");
            break;
        case 6:
            esqueletoRightArm.classList.remove("invisible");
            break;

        }
}