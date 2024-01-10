window.onload = iniciar;

let cont = 1;

function iniciar() {
  document.getElementById("enviar").addEventListener("click", valido);

  function valido(evento) {
    let id = document.forms[0];

    let datos = new Array(9);

    datos[0] = id[5].value;
    datos[1] = id[6].value;
    datos[2] = id[7].value;
    datos[3] = id[8].value;
    datos[4] = id[0].value;
    datos[5] = id[1].value;
    datos[6] = id[2].value;
    datos[7] = id[3].value;
    datos[8] = id[4].value;

    let tabla = document.getElementById("tablita");

    let fila = tabla.insertRow();
    let celda = fila.insertCell();
    let texto = document.createTextNode(cont);

    cont++;

    celda.appendChild(texto);

    for (let x = 0; x <= datos.length; x++) {
      if (x == datos.length) {
        celda = fila.insertCell();

        let eliminar = document.createElement("button");
        eliminar.setAttribute("id", "eliminar");
        let parrafo = document.createElement("p");
        let textoBoton = document.createTextNode("Eliminar");
        parrafo.appendChild(textoBoton);
        eliminar.appendChild(parrafo);
        eliminar.addEventListener("click", function () {
          this.parentElement.parentElement.remove();
        });
        celda.appendChild(eliminar);
      } else {
        celda = fila.insertCell();

        texto = document.createTextNode(datos[x]);

        celda.appendChild(texto);
      }
    }
    evento.preventDefault();
  }
}
