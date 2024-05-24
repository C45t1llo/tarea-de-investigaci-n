function calcularExpresion(a, b, c) {
    var x = ((Math.sin(a) + Math.cos(b)) * (Math.trunc(a) % 2)) + (Math.sqrt(Math.pow(a, 3)) / (a * b + c));
    console.log("El resultado de la expresión es: " + x);
}

var a = 3;
var b = 4;
var c = 5;

calcularExpresion(a, b, c);
