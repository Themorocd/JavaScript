function palindromo() {
  let texto = document.getElementById("texto").value;
  let textoseparado = texto.split(" ");
  let tamañotexto = textoseparado.length;

  let ventananueva = window.open("", "_blank");

  ventananueva.document.write(
    "<p>El número de palabras es: " + tamañotexto + "</p>"
  );

  let primerapalabra = textoseparado[0];
  ventananueva.document.write(
    "<p>La primera palabra es: " + primerapalabra + "</p>"
  );

  let ultimapalabra = textoseparado[textoseparado.length - 1];
  ventananueva.document.write(
    "<p>La última palabra es: " + ultimapalabra + "</p>"
  );

  let vueltafrase = textoseparado.reverse();
  ventananueva.document.write(
    "<p>La frase al revés es: " + vueltafrase.join("-") + "</p>"
  );

  let ordenarfrase = textoseparado.slice().sort();
  ventananueva.document.write(
    "<p>La frase ordenada de la 'A' a la 'Z' es: " +
      ordenarfrase.join("-") +
      "</p>"
  );

  let ordenofrasealreves = textoseparado.slice().sort().reverse();
  ventananueva.document.write(
    "<p>La frase ordenada de la 'Z' a la 'A' es: " +
      ordenofrasealreves.join("-") +
      "</p>"
  );
}
