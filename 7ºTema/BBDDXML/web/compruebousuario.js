// Cuando la ventana (página) ha cargado completamente, ejecuta la función 'iniciar'.
window.onload = iniciar;

// Declaración de la variable 'peticion' inicializada como null.
let peticion = null;

// Definición de la función 'iniciar'.
function iniciar() {
    // Agrega un escuchador de eventos al elemento con el ID "comprobar".
    // Cuando se haga clic en este elemento, se ejecutará la función 'valida'.
    document.getElementById("comprobar").addEventListener("click", valida, true);
}

// Definición de la función 'valida'.
function valida() {
    // Crea un nuevo objeto XMLHttpRequest (usado para hacer solicitudes HTTP).
    peticion = new XMLHttpRequest();

    // Establece la función 'procesarespuesta' para manejar el evento 'readystatechange'.
    peticion.onreadystatechange = procesarespuesta;

    // Abre una conexión POST hacia el archivo 'compruebousuario.jsp'.
    // El tercer parámetro 'true' indica que la solicitud es asíncrona.
    peticion.open("POST", "compruebousuario.jsp", true);

    // Establece la cabecera (header) de la solicitud para indicar el tipo de contenido.
    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // Llama a la función 'crearQuery' para obtener los datos del usuario y genera la cadena de consulta.
    let query = crearQuery();

    // Envía la solicitud con la cadena de consulta como datos.
    peticion.send(query);
}

// Definición de la función 'crearQuery'.
function crearQuery() {
    // Obtiene el valor del elemento con el ID "name" (presumiblemente un campo de entrada de texto).
    let usuario = document.getElementById("name").value;

    // Muestra una alerta con el valor del usuario (esto puede ser eliminado en una aplicación real).
    //alert(usuario);

    // Retorna una cadena de consulta que incluye el nombre de usuario y un parámetro 'nocache' con un valor aleatorio.
    return "usuario=" + encodeURIComponent(usuario) + "&nocache=" + Math.random();
}

// Definición de la función 'procesarespuesta'.
function procesarespuesta() {
    // Verifica si la solicitud ha completado todas las fases (readyState 4) y el estado es 'OK' (status 200).
    if (peticion.readyState == 4 && peticion.status == 200) {
        // Actualiza el contenido del elemento con el ID "id" con la respuesta recibida.
        document.getElementById("id").innerHTML = peticion.responseText;
    }
}
