//Paso 1. Declaración de variables// 
let numero1 = 10;
let numero2 = 5;

//Almacenar operaciones//
let operacion ="suma";


//Paso 2. Función para realizar operaciones//
function realizarOperacion(numero1,numero2,operacion) {
    let resultado;
    
    if (operacion === "suma") {
        resultado = numero1 + numero2;
    } else if (operacion === "resta") {
        resultado = numero1 - numero2;
    } else if (operacion === "multiplicacion") {
        resultado = numero1 * numero2;
    } else if (operacion === "division") {
        //Validar la división por cero//
        if (numero2 === 0) {
            return "Error: No se puede dividir entre 0";
        }
        resultado = numero1 / numero2;
    } else {
        return "Error de Operación, intentalo nuevamente"
    }
    return resultado;
}

// Paso 3: Validación de datos y operaciones//
let resultadoOperacion = realizarOperacion (numero1,numero2,operacion);
console.log("El resultado de la operación es: " + resultadoOperacion);

// Paso 4: Bucle para realizar múltiples operaciones//
let continuar = true;

while (continuar) {
    let numero1 = parseFloat(prompt("Ingrese el primer número: "));
    let numero2 = parseFloat(prompt("Ingrese el segundo número: "));
    let operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division) o 'salir') para terminar: ");

    //Para salir del bucle cuando el usuario ingrese "salir"//
    if (operacion.toLowerCase() === "salir") {
        console.log("Gracias por usar la calculadora");
        continuar = false;
    } else {
        let resultado = realizarOperacion(numero1, numero2, operacion);
        console.log("El resultado de la operación es: " + resultado); 
    }
    // Preguntar si quiere hacer otra operación//
    let hacerOtra = prompt("¿Quieres realizar otra operación? (si/no)");
    if (hacerOtra.toLowerCase() !== "si") {
        continuar = false;
        console.log("Gracias por usar la calculadora");
    }
}