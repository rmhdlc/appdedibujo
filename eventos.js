var estado = 0;
var modoDeDibujo = 0;
var CLICKDERECHO = 0;

var botonLibre = document.getElementById("botoncitoLibre");
botonLibre.addEventListener("click", dibujoLibre);
var botonClick = document.getElementById("botoncitoClick");
botonClick.addEventListener("click", dibujoClick);
var botonMano = document.getElementById("botoncitoMano");
botonMano.addEventListener("click", dibujoMano);

document.addEventListener("touch", dibujarTeclado);
//document.addEventListener("mousedown",presionarMouse);  
//document.addEventListener("mouseup",soltarMouse);   
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = evento.offsetX;
var y = evento.offsetY;

//------------------------------------------------------------------------------------------------

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento) {
    var colorcito = "green";

    //MOUSE LIBRE Y MANO
    if (modoDeDibujo == 2) {
        if (estado == 1) {
            dibujarLinea(colorcito, x, y, evento.offsetX, evento.offsetY, papel);
            x = evento.offsetX;
            y = evento.offsetY;
        }
    }

    //MOUSE CLICK
    else if (modoDeDibujo == 3 && estado == 1) {
        if(evento.button == CLICKDERECHO) {
            dibujarLinea(colorcito, x, y, evento.offsetX, evento.offsetY, papel);
            x = evento.offsetX;
            y = evento.offsetY;
        }
    }

}

function presionarMouse(evento) {
    estado = 1;         
    x = evento.offsetX;
    y = evento.offsetY;
}
  
function soltarMouse(evento) {
    estado = 0;        
    x = evento.offsetX;
    y = evento.offsetY;
}

function dibujoLibre() {
    modoDeDibujo = 2;
}

function dibujoMano() {
    modoDeDibujo = 2;
}

function dibujoClick() {
    modoDeDibujo = 3;
}