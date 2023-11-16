let filas, columnas;

// Solicitar número de filas (entre 10 y 20)
while (true) {
  filas = parseInt(prompt("Introduce el número de filas (entre 10 y 20):"));
  if (filas >= 10 && filas <= 20) {
    break;
  } else {
    alert("El número de filas debe estar entre 10 y 20. Inténtalo de nuevo.");
  }
}

// Solicitar número de columnas (entre 10 y 20)
while (true) {
  columnas = parseInt(prompt("Introduce el número de columnas (entre 10 y 20):"));
  if (columnas >= 10 && columnas <= 20) {
    break;
  } else {
    alert("El número de columnas debe estar entre 10 y 20. Inténtalo de nuevo.");
  }
}

// Crear la tabla
document.write('<table border="5">');
let contador = filas * columnas;

for (let x = 0; x < filas; x++) {
  document.write('<tr>');
  for (let z = 0; z < columnas; z++) {
    let esMultiploDos = contador % 2 === 0;
    let esMultiploTres = contador % 3 === 0;
    let esMultiploSiete = contador % 7 === 0;

    let estilo = '';
    if (esMultiploDos) {
      estilo = 'background-color: blue;';
    }
    if (esMultiploTres) {
      estilo = 'background-color: red;';
    }
    if (esMultiploSiete) {
      estilo = 'background-color: yellow;';
    }

    document.write('<td style="' + estilo + '">' + contador + '</td>');
    contador--;
  }
  document.write('</tr>');
}
document.write('</table>');
