//Proceso ejercicio1
    // Código del ejercicio 1
//FinProceso
//Proceso ejercicio2
    // Código del ejercicio 2
//FinProceso
//Proceso mostrarMenu
    //Escribir "Menú Ejercicios"
    //Escribir "1) Enunciado del Ejercicio 1"
    //Escribir "2) Enunciado del Ejercicio 2"
    // Agrega opciones para los demás ejercicios
  //  Escribir "24) Enunciado del Ejercicio 24"
//FinProceso
//Proceso ejecutarEjercicio(seleccion)
    //Si seleccion = 1 Entonces
      //  ejercicio1()
    //Sino Si seleccion = 2 Entonces
        //ejercicio2()
    // Agrega condiciones para los demás ejercicios
    //Sino Si seleccion = 24 Entonces
      //  ejercicio24()
    //Sino
    //    Escribir "Opción no válida"
  //  FinSi
//FinProceso
//Proceso principal
  //  mostrarMenu()
    //Escribir "Elija opción [1...24]: "
    //Leer opcion
  //  ejecutarEjercicio(opcion)
//FinProceso

const { write } = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function ejercicio1() {
    console.log("Respuesta del Ejercicio 1");
    function celsiusToFahrenheit(celsius) {
        fahrenheit = (celsius * 9/5) + 90;
        console.log(celsius + " grados Celsius son " + fahrenheit + " grados Fahrenheit.");
      }     
      celsiusToFahrenheit(30);     
}
function ejercicio2() {
    console.log("Respuesta del Ejercicio 2");
    var numeroEntero = 5; 
    var doble = numeroEntero * 2;
    var triple = numeroEntero * 3;
    console.log("El doble de " + numeroEntero + " es " + doble);
    console.log("El triple de " + numeroEntero + " es " + triple);
}
function ejercicio3() {
    console.log("Respuesta del Ejercicio 3");
    function calcularProducto(a, b, c, d) {
        var producto = a * b * c * d;
        console.log("El producto es: " + producto);
    }
    function calcularSuma(a, b, c, d) {
        var suma = a + b + c + d;
        console.log("La suma es: " + suma);
    }
    function calcularMedia(a, b, c, d) {
        var media = (a + b + c + d) / 4;
        console.log("La media aritmética es: " + media);
    }    
    var variable1 = 2;
    var variable2 = 3;
    var variable3 = 4;
    var variable4 = 5;
    calcularProducto(variable1, variable2, variable3, variable4);
    calcularSuma(variable1, variable2, variable3, variable4);
    calcularMedia(variable1, variable2, variable3, variable4);
}    
function ejercicio4() {
    console.log("Respuesta del Ejercicio 4");
    const pesoEnLibras = 190;
    const LIBRAS_A_KILOGRAMOS = 0.453593;
    let pesoEnKilogramos = pesoEnLibras * LIBRAS_A_KILOGRAMOS;

    let gramos = (pesoEnKilogramos - Math.floor(pesoEnKilogramos)) * 1000;
    console.log("El peso en kilogramos es: " + Math.floor(pesoEnKilogramos) + " kg");
    console.log("El peso en gramos es: " + Math.round(gramos) + " g");
}
function ejercicio5() {
    console.log("Respuesta del Ejercicio 5");
    function calcularExpresion(a, b, c) {
        var x = ((Math.sin(a) + Math.cos(b)) * (Math.trunc(a) % 2)) + (Math.sqrt(Math.pow(a, 3)) / (a * b + c));
        console.log("El resultado de la expresión es: " + x);
    }
    var a = 3;
    var b = 4;
    var c = 5;
    calcularExpresion(a, b, c);  
}
function ejercicio6()
{
    function calcularPago(horasTrabajadas) {
        tarifaNormal = 5;
        horasNormales = 40;
        sueldo = 400; 
        console.log("Sueldo:", sueldo);
        horasExtra = Math.max(0, horasTrabajadas - horasNormales);
        pagoExtra = horasExtra > 0 ? horasExtra * (tarifaNormal * 2) : 0;
         console.log("Sobretiempo:", pagoExtra);
        ingresoTotal = sueldo + pagoExtra;
        console.log("Ingreso Total:", ingresoTotal);
    
        seguroSocial = 0.1 * ingresoTotal;
        console.log("Seguro Social (IESS):", seguroSocial);
    
        netoRecibir = ingresoTotal - seguroSocial;
        console.log("Neto a Recibir:", netoRecibir);
    }
    horasTrabajadas = 45; 
    calcularPago(horasTrabajadas);  
}
function ejercicio7(){
    function encontrarMayor(num1, num2) {
        if (num1 % 2 === 0 && num2 % 2 !== 0) {
            if (num1 > num2) {
                console.log("El mayor número es: " + num1);
            } else if (num2 > num1) {
                console.log("El mayor número es: " + num2);
            } else {
                console.log("Ambos números son iguales: " + num1);
            }
        } else {
            console.log("Los números no cumplen con las condiciones necesarias.");
        }
    }
    encontrarMayor(8, 7); 
}
function ejercicio8 (){ 
function verificarCaracter(caracter) {
    if ((caracter >= 'a' && caracter <= 'z') || (caracter >= 'A' && caracter <= 'Z')) {
        console.log("El carácter '" + caracter + "' está comprendido entre las letras a y z.");
    } else if (caracter === ',' || caracter === '.' || caracter === ';' || caracter === ':') {
        console.log("El carácter '" + caracter + "' es un signo de puntuación.");
    } else {
        console.log("El carácter es: " + caracter);
    }
}
verificarCaracter('b'); 
verificarCaracter('x'); 
verificarCaracter(':'); 
verificarCaracter('9'); 
}
function ejercicio9(){
    function calcularPago(cantidadColas, precioPorCola) {
        const precioSinDescuento = cantidadColas * precioPorCola;
        let descuento = 0;
        if (cantidadColas >= 12) {
            descuento = precioSinDescuento * 0.10; 
        }
        let precioConDescuento;
        if (precioSinDescuento > 200) {
            precioConDescuento = precioSinDescuento - descuento;
        } else {
            precioConDescuento = precioSinDescuento - 10;
        }
        const iva = 0.15;
        const subtotal = precioConDescuento;
        const total = subtotal * (1 + iva);
        console.log("Cantidad de colas: " + cantidadColas);
        console.log("Precio por cola: $" + precioPorCola);
        console.log("Precio sin descuento: $" + precioSinDescuento);
        console.log("Descuento aplicado: $" + descuento);
        console.log("Precio con descuento: $" + precioConDescuento);
        console.log("Total a pagar (con IVA 15%): $" + total);
    }
    calcularPago(20, 0.25); 
    
}
function ejercicio10(){
    function calcularDescuentoYTotal(precioTraje) {
        const iva = 0.15;
        let descuento = 0;
    
        if (precioTraje > 200) {
            descuento = precioTraje * 0.10; 
        } else {
            descuento = 10; 
        }
    
        const precioConDescuento = precioTraje - descuento;
        const totalConIVA = precioConDescuento * (1 + iva);
    
        console.log("Precio del traje: $" + precioTraje.toFixed(2));
        console.log("Descuento aplicado: $" + descuento.toFixed(2));
        console.log("Precio final con descuento: $" + precioConDescuento.toFixed(2));
        console.log("Total a pagar (con IVA 15%): $" + totalConIVA.toFixed(2));
    }
    
    calcularDescuentoYTotal(150);  
    calcularDescuentoYTotal(250); 
    
    
}
function ejercicio11(){
    function mostrarNombreDia(numeroDia) {
        const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado","Domingo"];
    
        if (numeroDia >= 1 && numeroDia <= 7) {
            const nombreDia = diasSemana[numeroDia - 1];
            console.log("El nombre del día es: " + nombreDia);
        } else {
            console.log("Número de día inválido. Por favor, ingrese un número del 1 al 7.");
        }
    }
    
    mostrarNombreDia(1);
    mostrarNombreDia(4); 
  
    
}
function ejercicio12(){ 
    function mostrarNombreMes(numeroMes) {
        const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
        if (numeroMes >= 1 && numeroMes <= 12) {
            const nombreMes = meses[numeroMes - 1];
            console.log("El nombre del mes es: " + nombreMes);
        } else {
            console.log("Número de mes inválido. Por favor, ingrese un número del 1 al 12.");
        }
    }
    mostrarNombreMes(1); 
    mostrarNombreMes(6); 
      
}
function ejercicio13(){
const nombres = ["Roosvelt", "Carolina", "Elkin", "Ambar", "Diego"];

console.log(nombres[0]);
console.log(nombres[1]);
console.log(nombres[2]);
console.log(nombres[3]);
console.log(nombres[4]);

}
function ejercicio14(){
    function obtenerCaracteresDireccion(direccion) {
        const primerCaracter = direccion[0];
        
        const longitud = direccion.length;
        const caracterDelMedio = longitud % 2 === 0 ? direccion[longitud / 2 - 1] : direccion[Math.floor(longitud / 2)];
        
        const ultimoCaracter = direccion[longitud - 1];
        
        console.log("Dirección completa: " + direccion);
        console.log("Primer carácter: " + primerCaracter);
        console.log("Carácter del medio: " + caracterDelMedio);
        console.log("Último carácter: " + ultimoCaracter);
    }
    const direccionEjemplo = "Av conlon doce de octubre";
    obtenerCaracteresDireccion(direccionEjemplo);
}
function ejercicio15(){ 
function obtenerValoresAleatorios() {
    const valores = [];
    for (let i = 0; i < 5; i++) {
        valores.push(Math.floor(Math.random() * 201) - 100);
    }
    console.log("Valores aleatorios generados:", valores);
    const primerValor = valores[0];
    const ultimoValor = valores[valores.length - 1];

    if (primerValor % 2 === 0 && primerValor > 0) {
        console.log("El primer valor (" + primerValor + ") es par y positivo.");
    } else if (ultimoValor % 2 !== 0 && ultimoValor < 0) {
        console.log("El último valor (" + ultimoValor + ") es impar y negativo.");
    } else {
        console.log("Bro no cumple ninguna condición para imprimir el primer valor par positivo o el último valor impar negativo.");
    }
}

obtenerValoresAleatorios();


}
function ejercicio16(){
    function obtenerCaracteresNombres() {
        const nombres = ["Carolina", "Rick", "Max"]; 
        for (let i = 0; i < nombres.length; i++) {
            const nombre = nombres[i];
            const primerCaracter = nombre.charAt(0);
            const ultimoCaracter = nombre.charAt(nombre.length - 1); 
            console.log("Nombre:", nombre, "- Primer carácter:", primerCaracter, "- Último carácter:", ultimoCaracter);
        }
    }
    
    obtenerCaracteresNombres();
    
}
function ejercicio17(){
    function primerDigito(cadena) {
        if (cadena.length > 0 && !isNaN(cadena.charAt(0))) {
            console.log("El primer carácter es un dígito:", cadena.charAt(0));
        } else {
            console.log("El primer carácter no es un dígito o la cadena está vacía.");
        }
    }
    
    
    primerDigito("Hola");
    primerDigito("123"); 
    
}
function ejercicio18(){
    function ultimoCaracterLetra(cadena) {
        const ultimoCaracter = cadena[cadena.length - 1];
        const esLetra = (ultimoCaracter >= 'a' && ultimoCaracter <= 'z') || (ultimoCaracter >= 'A' && ultimoCaracter <= 'Z');
        if (cadena.length > 0 && esLetra) {
            console.log("El último carácter es una letra:", ultimoCaracter);
        } else {
            console.log("El último carácter no es una letra o la cadena está vacía.");
        }
    }
    
    ultimoCaracterLetra(" Hola bro");
    ultimoCaracterLetra("123"); 
    
}
function ejercicio19(){
    function primerCaracterVocal(cadena) {
        const primerCaracter = cadena[0];
        const esVocal = ['a', 'e', 'i', 'o', 'u'].includes(primerCaracter.toLowerCase());
        if (cadena.length > 0 && esVocal) {
            console.log("El primer carácter es una vocal:", primerCaracter);
        } else {
            console.log("El primer carácter no es una vocal o la cadena está vacía.");
        }
    }
    
    primerCaracterVocal("aei"); 
    
}
function ejercicio20(){
    function caracterDePuntuacionDelMedio(cadena) {
        const caracteresDePuntuacion = [';', ':', '.', ','];
        const longitud = cadena.length;
        const indiceDelMedio = Math.floor(longitud / 2);
        const caracterDelMedio = cadena.charAt(indiceDelMedio);
    
        if (longitud > 0 && caracteresDePuntuacion.includes(caracterDelMedio)) {
            console.log("El carácter del medio es:", caracterDelMedio);
        } else {
            console.log("No se encontró ningún carácter de puntuación en la posición del medio o la cadena está vacía.");
        }
    }
    caracterDePuntuacionDelMedio("la vida, es bella!"); 
    caracterDePuntuacionDelMedio("Hola: mundo");  
    caracterDePuntuacionDelMedio("9876");          
    
}
function ejercicio21(){
    function compararCaracteres(caracter1, caracter2) {
        if (caracter1 === caracter2) {
            console.log("Los caracteres son iguales.");
        } else if (caracter1 < caracter2) {
            console.log("El primer carácter es menor que el segundo.");
        } else {
            console.log("El primer carácter es mayor que el segundo.");
        }
    }
    
    compararCaracteres('a', 'a'); 
    
}
function ejercicio22(){
    function compararNombres(nombre1, nombre2) {
        if (nombre1 === nombre2) {
            console.log("Los nombres son iguales.");
        } else if (nombre1 < nombre2) {
            console.log("El primer nombre es menor que el segundo.");
        } else {
            console.log("El primer nombre es mayor que el segundo.");
        }
    }
    
    compararNombres('Carolina', 'Carolina');
    compararNombres('Carolina', 'Roosvelt');  
    compararNombres('Roosvelt', 'Roosvelt'); 
    
}
function ejercicio23(){
    function contarElementos(cadena) {
        const longitud = cadena.length;
        console.log("La cadena tiene " + longitud + " elementos.");
    }
    
    contarElementos("La vida es bella"); 
    
}
function ejercicio24(){
    function contarElementos(arreglo) {
        const cantidadElementos = arreglo.length;
        console.log("El arreglo tiene " + cantidadElementos + " elementos.");
    }
    
    
    const miArreglo = [1, 2, 3, 4, 5];
    contarElementos(miArreglo); 
    
}
function ejecutarEjercicio(numeroEjercicio) {
    const ejercicios = {
        1: ejercicio1,
        2: ejercicio2,
        3: ejercicio3,
        4: ejercicio4,
        5: ejercicio5,
        6: ejercicio6,
        7: ejercicio7,
        8: ejercicio8,
        9: ejercicio9,
        10: ejercicio10,
        11: ejercicio11,
        12: ejercicio12,
        13: ejercicio13,
        14: ejercicio14,
        15: ejercicio15,
        16: ejercicio16,
        17: ejercicio17,
        18: ejercicio18,
        19: ejercicio19,
        20: ejercicio20,
        21: ejercicio21,
        22: ejercicio22,
        23: ejercicio23,
        24: ejercicio24,
        0: salirMenu 
    };

    const ejercicio = ejercicios[numeroEjercicio];
    if (ejercicio) {
        ejercicio();
    } else {
        console.log("Ejercicio no encontrado.");
    }
}

function salirMenu() {
    console.log("Saliendo del menú...");
    rl.close();
}
function mostrarMenu() {
    console.log("Menú Ejercicios");
    console.log("1) Enunciado del Ejercicio 1");
    console.log("2) Enunciado del Ejercicio 2");
    console.log("3) Enunciado del Ejercicio 3");
    console.log("4) Enunciado del Ejercicio 4");
    console.log("5) Enunciado del Ejercicio 5");
    console.log("6) Enunciado del Ejercicio 6");
    console.log("7) Enunciado del Ejercicio 7");
    console.log("8) Enunciado del Ejercicio 8");
    console.log("9) Enunciado del Ejercicio 9");
    console.log("10) Enunciado del Ejercicio 10");
    console.log("11) Enunciado del Ejercicio 11");
    console.log("12) Enunciado del Ejercicio 12");
    console.log("13) Enunciado del Ejercicio 13");
    console.log("14) Enunciado del Ejercicio 14");
    console.log("15) Enunciado del Ejercicio 15");
    console.log("16) Enunciado del Ejercicio 16");
    console.log("17) Enunciado del Ejercicio 17");
    console.log("18) Enunciado del Ejercicio 18");
    console.log("19) Enunciado del Ejercicio 19");
    console.log("20) Enunciado del Ejercicio 20");
    console.log("21) Enunciado del Ejercicio 21");
    console.log("22) Enunciado del Ejercicio 22");
    console.log("23) Enunciado del Ejercicio 23");
    console.log("24) Enunciado del Ejercicio 24");
    console.log("0) Salir del menú");

}

mostrarMenu();

rl.question("Elija opción [0...24]: ", (opcion) => {
    opcion = parseInt(opcion);
    if (opcion >= 0 && opcion <= 24) {
        ejecutarEjercicio(opcion);
    } else {
        console.log("Bro. Por favor elija una opción válida.");
    }
    
});
