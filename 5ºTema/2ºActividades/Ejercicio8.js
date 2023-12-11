// Esta función se llama 'muestro' y toma un parámetro 'objeto'
function muestro(objeto) {
    // Comprueba si el valor del objeto pasado es igual a "Mostrar"
    if (objeto.value == "Mostrar") {
        // Si el valor es "Mostrar", quita el atributo "hidden" del elemento con ID "Ocultar"
        document.getElementById("Ocultar").removeAttribute("hidden");
    } else {
        // Si el valor no es "Mostrar", establece el atributo "hidden" en el elemento con ID "Ocultar"
        document.getElementById("Ocultar").setAttribute("hidden", true);
    }
}
