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

  document.getElementById("resultado").innerHTML="";  
  document.getElementById("resultado2").innerHTML="";  
  document.getElementById("resultado3").innerHTML=""; 

  num = Math.floor(Math.random() * (7 - 0 + 1) + 0);
  num2 = Math.floor(Math.random() * (7 - 0 + 1) + 0);

  let resultado1 = document.getElementById("primero");
  let resultado2 = document.getElementById("segundo");

  let parrafo = resultado1.firstChild;
  let parrafo2 = resultado2.firstChild;

  let elemento = document.createElement("p");
  elemento = document.createTextNode(num);

  let elemento2 = document.createElement("p");
  elemento2 = document.createTextNode(num2);

  document.getElementById("primero").appendChild(elemento);
  document.getElementById("segundo").appendChild(elemento2);

  if (parrafo !== null) {
    resultado1.replaceChild(elemento, parrafo);
  }

  if (parrafo2 !== null) {
    resultado2.replaceChild(elemento2, parrafo2);
  }
}

function factorial() {
  if (num > num2) {
    let resul = 1;
    for (let x = 1; x <= num; x++) {
      resul *= x;
    }

    let resultadofactorial = document.getElementById("resultado");

    let parraf = resultadofactorial.firstChild;

    let elem = document.createElement("p");
    elem = document.createTextNode(resul);

    document.getElementById("resultado").appendChild(elem);

    if (parraf !== null) {
      resultadofactorial.replaceChild(elem, parraf);
    }
  } else if (num2 > num) {
    let resul = 1;
    for (let x = 1; x <= num2; x++) {
      resul *= x;
    }

    let resultadofactorial = document.getElementById("resultado");

    let parraf = resultadofactorial.firstChild;

    let elem = document.createElement("p");
    elem = document.createTextNode(resul);

    document.getElementById("resultado").appendChild(elem);

    if (parraf !== null) {
      resultadofactorial.replaceChild(elem, parraf);
    }
  }
}

function primo() {
  esPrimo = true;
  if (num < num2) {
    for (let x = 0; x < num; x++) {
      if (num % x === 0) {
        esPrimo = false;
      }
    }

    let resultadoprimo = document.getElementById("resultado2");

    let parraf = resultadoprimo.firstChild;

    let elem = document.createElement("p");
    elem = document.createTextNode(esPrimo ? "SI" : "NO");

    document.getElementById("resultado2").appendChild(elem);

    if (parraf !== null) {
      resultadoprimo.replaceChild(elem, parraf);
    }
  } else if (num2 < num) {
    for (let x = 0; x < num; x++) {
      if (num % x === 0) {
        esPrimo = false;
      }
    }

    let resultadoprimo = document.getElementById("resultado2");

    let parraf = resultadoprimo.firstChild;

    let elem = document.createElement("p");
    elem = document.createTextNode(esPrimo ? "SI" : "NO");

    document.getElementById("resultado2").appendChild(elem);

    if (parraf !== null) {
      resultadoprimo.replaceChild(elem, parraf);
    }
  }
}

function dividir(){

    if(num > num2){

        let totaldividir = num / num2;

        let resultadodividir = document.getElementById("resultado3");

        let parraf = resultadodividir.firstChild;
    
        let elem = document.createElement("p");
        elem = document.createTextNode(totaldividir);
    
        document.getElementById("resultado3").appendChild(elem);
    
        if (parraf !== null) {
            resultadodividir.replaceChild(elem, parraf);
        }



    } else if(num2 > num){

        let totaldividir = num2 / num;

        let resultadodividir = document.getElementById("resultado3");

        let parraf = resultadodividir.firstChild;
    
        let elem = document.createElement("p");
        elem = document.createTextNode(totaldividir);
    
        document.getElementById("resultado3").appendChild(elem);
    
        if (parraf !== null) {
            resultadodividir.replaceChild(elem, parraf);
        }

    }

}