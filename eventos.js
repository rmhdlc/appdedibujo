var estado = 0;
var modoDeDibujo = 0;

var botonLibre = document.getElementById("botoncitoLibre");
botonLibre.addEventListener("click", dibujoLibre);


document.addEventListener("mousemove", dibujarTeclado);

document.addEventListener("mousedown",presionarMouse);  
document.addEventListener("mouseup",soltarMouse);   
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

    //MOUSE LIBRE
    if (modoDeDibujo == 2) {
        if (estado == 1) {
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
