// Esta función se llama 'muestrodatos()'
function muestrodatos() {
    // Este bucle 'for' recorre todos los elementos con el nombre 'actores'
    // dentro del formulario con el nombre 'formulario'
    for (let i = 0; i < document.formulario.actores.length; i++) {
        // Comprueba si el elemento 'actores' en la posición 'i' está marcado (checked)
        if (document.formulario.actores[i].checked) {
            // Si el elemento está marcado, muestra una alerta (popup) con el valor del elemento
            alert(document.formulario.actores[i].value);
        }
    }
}
