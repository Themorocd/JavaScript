window.onload = iniciar; // Cuando la ventana se carga completamente, se llama a la función 'iniciar'

let texto, fuente, estilo, color, size; // Declaración de variables (no se utilizan en el código proporcionado)

function iniciar() {
    // Se asignan event listeners a los elementos de formulario con ID "fuente", "estilo", "color" y "size"
    document.getElementById("fuente").addEventListener('click', cambiarFuente);
    document.getElementById("estilo").addEventListener('click', cambiarEstilo);
    document.getElementById("color").addEventListener('click', cambiarColor);
    document.getElementById("size").addEventListener('click', cambiarSize);
}

function cambiarFuente() {
    // Cambia la fuente del elemento de texto con ID "idTexto" según la opción seleccionada en el elemento de formulario con ID "fuente"
    document.getElementById("idTexto").style.fontFamily = document.getElementById("fuente").value;
}

function cambiarEstilo() {
    // Cambia el estilo (normal, itálico, etc.) del elemento de texto con ID "idTexto" según la opción seleccionada en el elemento de formulario con ID "estilo"
    document.getElementById("idTexto").style.fontStyle = document.getElementById("estilo").value;
}

function cambiarColor() {
    // Cambia el color del texto del elemento con ID "idTexto" según la opción seleccionada en el elemento de formulario con ID "color"
    document.getElementById("idTexto").style.color = document.getElementById("color").value;
}

function cambiarSize() {
    // Cambia el tamaño de la fuente del elemento con ID "idTexto" según la opción seleccionada en el elemento de formulario con ID "size"
    document.getElementById("idTexto").style.fontSize = document.getElementById("size").value;
}


