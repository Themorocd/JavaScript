// Cuando la ventana se carga completamente, se llama a la función 'iniciar'
window.onload = function() {
    // Se asignan event listeners a los elementos con ID "1", "2", "3" y "4"
    for (let x = 1; x <= 4; x++) {
        // Cuando el mouse pasa sobre el elemento, se llama a la función 'agrandar'
        document.getElementById(x.toString()).addEventListener('mouseover', agrandar);
        // Cuando el mouse sale del elemento, se llama a la función 'vacio'
        document.getElementById(x.toString()).addEventListener('mouseout', vacio);
    }
};

// Función que muestra la imagen ampliada
function agrandar() {
    // Obtiene el ID del elemento sobre el cual se activó el evento
    let id = this.id;
    // Obtiene la ruta de la imagen del elemento
    let foto = document.getElementById(id).src;
    // Establece la imagen ampliada con la ruta obtenida
    document.getElementById("ampliada").src = foto;
}

// Función que oculta la imagen ampliada
function vacio() {
    // Establece la imagen ampliada como vacía (sin fuente)
    document.getElementById("ampliada").src = "";
}
