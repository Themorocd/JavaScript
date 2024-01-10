window.onload = iniciar;
function iniciar() {
    acumulador = 1;
    numero = 0;
    document.getElementById("genera").addEventListener("click", genera, true);
    document.getElementById("factorial").addEventListener("click", factorial, true);
    document.getElementById("primo").addEventListener("click", primo, true);
    document.getElementById("par").addEventListener("click", par, true);
}

function genera() {



    numero = Math.floor(Math.random() * (5 - 0 + 1) + 0);
    let resultadoDiv = document.getElementById("fila");
    let parrafo = resultadoDiv.firstChild;
    let elementoP = document.createElement("p");
    elementoP = document.createTextNode(numero);
    document.getElementById("fila").appendChild(elementoP);
    if (parrafo !== null) {
        resultadoDiv.replaceChild(elementoP, parrafo);
    }
}

function factorial() {



    acumulador = 1;
    for (let i = numero; i > 0; i--) {
        acumulador *= i;
    }
    let resultadoFactorialDiv = document.getElementById("resultado1");
    let parrafo = resultadoFactorialDiv.firstChild;
    let elementoPFactorial = document.createElement("p");
    elementoPFactorial = document.createTextNode(acumulador);
    document.getElementById("resultado1").appendChild(elementoPFactorial);
    if (parrafo !== null) {
        resultadoFactorialDiv.replaceChild(elementoPFactorial, parrafo);
    }
}

function primo() {
    esPrimo = true;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
        }
    }
    let resultadoPrimoDiv = document.getElementById("resultado2");
    let parrafo = resultadoPrimoDiv.firstChild;
    let elementoPPrimo = document.createElement("p");
    elementoPPrimo = document.createTextNode(esPrimo ? "SI" : "NO");
    document.getElementById("resultado2").appendChild(elementoPPrimo);
    if (parrafo !== null) {
        resultadoPrimoDiv.replaceChild(elementoPPrimo, parrafo);
    }
}

function par() {
    espar = false;
    let cadena = "";
    if (numero % 2 == 0) {
        espar = true;
    }
    if (espar) {
        cadena = "SI";

    } else {
        cadena = "NO";

    }
    let cuartoDiv = document.getElementById("resultado3");
    let parrafo1 = cuartoDiv.firstChild;
    let elementoP_Par = document.createElement("p");
    elementoP_Par = document.createTextNode(cadena);
    cuartoDiv.appendChild(elementoP_Par);
    if (parrafo1 != null) {
        cuartoDiv.replaceChild(elementoP_Par, parrafo1);
    }

}
