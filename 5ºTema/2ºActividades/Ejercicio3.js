// Esta función se llama 'enviar()'
function enviar() {
    // URL de redirección
    let url = "https://cdpjosecabrera.es/";

    // Variable para almacenar el nombre obtenido del elemento con ID "text"
    let nombre = "";

    // Obtiene el valor del elemento con ID "text" y lo asigna a la variable 'nombre'
    nombre = document.getElementById("text").value;

    // Muestra una alerta que contiene el nombre y la URL de redirección
    alert(nombre + " se le va a dirigir a: " + url);

    // Establece una redirección después de 2 segundos (2000 milisegundos)
    setTimeout(function() {
        // Redirige a la URL almacenada en 'url' utilizando location.href
        location.href = url;
    }, 2000);
}
