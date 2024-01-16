
// Ejecuto la funcion iniciar
window.onload = iniciar;

// Función iniciar
function iniciar() {
    
    acumulador = 1;  // Lo uso para calcular el factorial
    numero = 0;      // Almaceno numeros

    // eventos al hacer clic en los botones
    document.getElementById("genera").addEventListener("click", genera, true);
    document.getElementById("factorial").addEventListener("click", factorial, true);
    document.getElementById("primo").addEventListener("click", primo, true);
    document.getElementById("par").addEventListener("click", par, true);
}

// genero un número aleatorio y lo muestro en la página
function genera() {
    // Genero un número aleatorio entre 0 y 5
    numero = Math.floor(Math.random() * (5 - 0 + 1) + 0);

    // Obtengo el elemento donde se mostrará el resultado
    let resultadoDiv = document.getElementById("fila");

    // Obtengo el primer párrafo dentro del elemento
    let parrafo = resultadoDiv.firstChild;

    // Creo un nuevo párrafo con el número generado
    let elementoP = document.createElement("p");
    elementoP = document.createTextNode(numero);

    // Agrego el nuevo párrafo al elemento
    document.getElementById("fila").appendChild(elementoP);

    // Reemplazo el párrafo existente con el nuevo si ya existe
    if (parrafo !== null) {
        resultadoDiv.replaceChild(elementoP, parrafo);
    }
}

// Función para calcular el factorial del número generado y mostrarlo
function factorial() {
    // acumulador
    acumulador = 1;

    // Calculo el factorial del número
    for (let i = numero; i > 0; i--) {
        acumulador *= i;
    }

    // Obtengo el elemento donde se mostrará el resultado
    let resultadoFactorialDiv = document.getElementById("resultado1");

    // Obtengo el primer párrafo dentro del elemento
    let parrafo = resultadoFactorialDiv.firstChild;

    // Creo un nuevo párrafo con el resultado del factorial
    let elementoPFactorial = document.createElement("p");
    elementoPFactorial = document.createTextNode(acumulador);

    // Agrego el nuevo párrafo al elemento
    document.getElementById("resultado1").appendChild(elementoPFactorial);

    // Cambio el párrafo existente con el nuevo si ya existe
    if (parrafo !== null) {
        resultadoFactorialDiv.replaceChild(elementoPFactorial, parrafo);
    }
}

// Función para verificar si el número generado es primo y mostrar el resultado
function primo() {
    //variable esPrimo
    esPrimo = true;

    // Verifico si el número es divisible por algún número menor a él
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
        }
    }

    // Obtengo el elemento donde se mostrará el resultado
    let resultadoPrimoDiv = document.getElementById("resultado2");

    // Obtengo el primer párrafo dentro del elemento
    let parrafo = resultadoPrimoDiv.firstChild;

    // Creo un nuevo párrafo con "SI" o "NO" dependiendo de si es primo o no
    let elementoPPrimo = document.createElement("p");
    elementoPPrimo = document.createTextNode(esPrimo ? "SI" : "NO");

    // Agrego el nuevo párrafo al elemento
    document.getElementById("resultado2").appendChild(elementoPPrimo);

    // Cambio el párrafo existente con el nuevo si ya existe
    if (parrafo !== null) {
        resultadoPrimoDiv.replaceChild(elementoPPrimo, parrafo);
    }
}

// Función para verificar si el número generado es par y mostrar el resultado
function par() {
    //variable espar
    espar = false;

    // Compruebo si el número es divisible por 2
    if (numero % 2 == 0) {
        espar = true;
    }

    // Si es par muestro SI y si no es par muestro NO
    let cadena = espar ? "SI" : "NO";

    // Obtengo el elemento donde se mostrará el resultado
    let cuartoDiv = document.getElementById("resultado3");

    // Obtengo el primer párrafo dentro del elemento
    let parrafo1 = cuartoDiv.firstChild;

    // Creo un nuevo párrafo con la cadena
    let elementoP_Par = document.createElement("p");
    elementoP_Par = document.createTextNode(cadena);

    // Agrego el nuevo párrafo al elemento
    cuartoDiv.appendChild(elementoP_Par);

    // Cambio el párrafo existente con el nuevo si ya existe
    if (parrafo1 != null) {
        cuartoDiv.replaceChild(elementoP_Par, parrafo1);
    }
}
