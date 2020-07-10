var estado = 0;
var modoDeDibujo = 0;
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var botonFlechas = document.getElementById("botoncitoFlechas");
botonFlechas.addEventListener("click", dibujoFlechas);
var botonLibre = document.getElementById("botoncitoLibre");
botonLibre.addEventListener("click", dibujoLibre);

document.addEventListener("keydown", dibujarTeclado);
document.addEventListener("mousemove", dibujarTeclado);
document.addEventListener("mousedown",presionarMouse);  
document.addEventListener("mouseup",soltarMouse);   
var cuadrito = document.getElementById("area_de_dibujo");
var ancho = cuadrito.width;
var alto = cuadrito.height;
var papel = cuadrito.getContext("2d");
var x = ancho/2;
var y = alto/2;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

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
    var movimiento = 10;

    //MOUSE LIBRE
    if (modoDeDibujo == 2) {
        console.log("si se detectó el modo 2");

        if (estado == 1) {
            dibujarLinea(colorcito, x, y, evento.offsetX, evento.offsetY, papel);
            x = evento.offsetX;
            y = evento.offsetY;
        }
    }

    //MOUSE CLICK
    else if (modoDeDibujo == 1) {
        console.log("si se detectó el modo 1");
        switch(evento.keyCode) {
            case teclas.UP:
                dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
                y = y - movimiento;
            break
    
            case teclas.DOWN:
                dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
                y = y + movimiento;
            break
    
            case teclas.LEFT:
                dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
                x = x - movimiento;
            break
    
            case teclas.RIGHT:
                dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
                x = x + movimiento;
            break
    
            default:
            break;
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

function dibujoFlechas() {
    modoDeDibujo = 1;
    x = ancho/2;
    y = alto/2;
}

function dibujoLibre() {
    modoDeDibujo = 2;
}
