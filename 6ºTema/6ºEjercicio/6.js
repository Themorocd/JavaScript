window.onload = iniciar;

function iniciar() {
  cont = 1;
  num = 0;
  num2 = 0;

  document.getElementById("genera").addEventListener("click", genera, true);
  document.getElementById("suma").addEventListener("click", suma, true);
  document.getElementById("resta").addEventListener("click", resta, true);
}

function genera() {
  num = Math.floor(Math.random() * (10 - 0 + 1) + 0);
  num2 = Math.floor(Math.random() * (10 - 0 + 1) + 0);
  let resulDIV = document.getElementById("primero");

  let resulDIV2 = document.getElementById("segundo");

  let parrafo = resulDIV.firstChild;

  let parrafo2 = resulDIV2.firstChild;

  let elemento = document.createElement("p");
  elemento = document.createTextNode(num);

  let elemento2 = document.createElement("p");
  elemento2 = document.createTextNode(num2);

  document.getElementById("primero").appendChild(elemento);
  document.getElementById("segundo").appendChild(elemento2);

  if (parrafo !== null) {
    resulDIV.replaceChild(elemento, parrafo);
  }

  if (parrafo2 !== null) {
    resulDIV2.replaceChild(elemento2, parrafo2);
  }
}

function suma() {
  let totalsuma = num + num2;

  let resultadosuma = document.getElementById("resultado");

  let parrafito = resultadosuma.firstChild;

  let elementsuma = document.getElementById("p");
  elementsuma = document.createTextNode(totalsuma);

  document.getElementById("resultado").appendChild(elementsuma);

  if (parrafito !== null) {
    resultadosuma.replaceChild(elementsuma, parrafito);
  }
}

function resta() {
  let totalresta = num - num2;

  let resultadoresta = document.getElementById("resultado");

  let parrafito = resultadoresta.firstChild;

  let elementresta = document.getElementById("p");
  elementresta = document.createTextNode(totalresta);

  document.getElementById("resultado").appendChild(elementresta);

  if (parrafito !== null) {
    resultadoresta.replaceChild(elementresta, parrafito);
  }
}
