
window.onload = iniciar;

function iniciar() {

    num = 0;
    num2 = 0;

    document.getElementById("genera").addEventListener("click", generar, true);
    document.getElementById("factorial").addEventListener("click", factorial, true);
    document.getElementById("primo").addEventListener("click", primo, true);
    document.getElementById("dividir").addEventListener("click", dividir, true);


}

function generar() {

    document.getElementById("resultado").innerHTML = "";
    document.getElementById("resultado2").innerHTML = "";
    document.getElementById("resultado3").innerHTML = "";

    num = Math.floor(Math.random() * (7 - 0 + 1) + 0);
    num2 = Math.floor(Math.random() * (7 - 0 + 1) + 0);

    let resultado1 = document.getElementById("primero");
    let resultado2 = document.getElementById("segundo");

    let parrafo1 = resultado1.firstChild;
    let parrrafo2 = resultado2.firstChild;

    let elemento = document.createElement("p");
    elemento = document.createTextNode(num);

    let elemento2 = document.createElement("p");
    elemento2 = document.createTextNode(num2);

    document.getElementById("primero").appendChild(elemento);
    document.getElementById("segundo").appendChild(elemento2);

    if (parrafo1 !== null) {
        resultado1.replaceChild(elemento, parrafo1);
    }

    if (parrrafo2 !== null) {
        resultado2.replaceChild(elemento2, parrrafo2);
    }
}


function factorial() {

    if (num > num2) {
        let resul = 1;
        for (let x = 1; x <= num; x++) {
            resul *= x;
        }
        let resultadofacto = document.getElementById("resultado");

        let parraf = resultadofacto.firstChild;

        let elem = document.createElement("p");
        elem = document.createTextNode(resul);

        document.getElementById("resultado").appendChild(elem);

        if (parraf !== null) {
            resultadofacto.replaceChild(elem, parraf);
        }
    } else if (num2 > num) {

        let resul = 1;
        for (let x = 1; x <= num2; x++) {
            resul *= x;
        }
        let resultadofacto = document.getElementById("resultado");

        let parraf = resultadofacto.firstChild;

        let elem = document.createElement("p");
        elem = document.createTextNode(resul);

        document.getElementById("resultado").appendChild(elem);

        if (parraf !== null) {
            resultadofacto.replaceChild(elem, parraf);
        }
    }

}


function primo(){


    esPrimero = true;

    if(num < num2){

        for(let x = 0; x<num; x++){
            if(num % x ===0){
                esPrimero = false;
            }
        }

        let resultadoprimo = document.getElementById("resultado2");

        let parrafito = resultadoprimo.firstChild;

        let elementito = document.createElement("p");
        elementito = document.createTextNode(esPrimero ? "SI" : "NO");

        document.getElementById("resultado2").appendChild(elementito);

        if(parrafito !== null){
            resultadoprimo.replaceChild(elementito,parrafito)
        }



    } else if(num2 < num){
        for(let x = 0; x<num2; x++){
            if(num2 % x ===0){
                esPrimero = false;
            }
        }

        let resultadoprimo = document.getElementById("resultado2");

        let parrafito = resultadoprimo.firstChild;

        let elementito = document.createElement("p");
        elementito = document.createTextNode(esPrimero ? "SI" : "NO");

        document.getElementById("resultado2").appendChild(elementito);

        if(parrafito !== null){
            resultadoprimo.replaceChild(elementito,parrafito)
        }

    }


}

function dividir(){


    if(num > num2){

        let divi = num / num2;

        let resultado = document.getElementById("resultado3");

        let parra = resultado.firstChild;

        let element = document.createElement("p");
        element = document.createTextNode(divi);

        document.getElementById("resultado3").appendChild(element);

        if(parra !== null){
            resultado.replaceChild(element,parra);
        }



    }else if( num2 > num){

        let divi = num2 / num;

        let resultado = document.getElementById("resultado3");

        let parra = resultado.firstChild;

        let element = document.createElement("p");
        element = document.createTextNode(divi);

        document.getElementById("resultado3").appendChild(element);

        if(parra !== null){
            resultado.replaceChild(element,parra);
        }
    }


}