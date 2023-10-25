// Inicialización de variables
let veces = 0; // Contador de repeticiones
let num_color = 0; // Índice del color actual
let colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]; // Array que contiene los colores en el orden especificado

// Configuración del intervalo que llama a la función cambioColor cada 3000 milisegundos (3 segundos)
let activar_color = setInterval(cambioColor, 3000);

// Definición de la función cambioColor
function cambioColor() {
    // Verifica si el número de repeticiones es menor que el total de colores multiplicado por 3
    if (num_color < colors.length * 3) {
        // Establece el color de fondo según el índice actual en el array de colores
        document.bgColor = colors[num_color % colors.length];
        // Incrementa el índice del color
        num_color++;
    } else {
        // Si se han completado las 3 repeticiones, se detiene el intervalo
        clearInterval(activar_color);
        // Se muestra un mensaje indicando que se han creado 3 arcoíris en 63 segundos
        alert("Se han creado 3 arcoíris en 63 segundos");
    }
    // Incrementa el contador de repeticiones en cada ejecución de la función cambioColor
    veces++;
}
