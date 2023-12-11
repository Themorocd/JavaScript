// Esta función se llama 'cambio' y recibe un parámetro 'objeto'
function cambio(objeto) {
    // Obtiene el contenido actual del elemento HTML pasado como argumento y lo almacena en la variable 'x'
    let x = objeto.innerHTML;

    // Utiliza un switch para evaluar el contenido actual del elemento y realizar cambios basados en los casos
    switch (x) {
        case 'DAW':
            // Si el contenido es 'DAW', cambia el contenido del elemento al texto "Desplieque de Aplicaciones"
            objeto.innerHTML = "Desplieque de Aplicaciones";
            break;

        case 'DIW':
            // Si el contenido es 'DIW', cambia el contenido del elemento al texto "Clase de chema"
            objeto.innerHTML = "Clase de chema";
            break;

        case 'HLC':
            // Si el contenido es 'HLC', cambia el contenido del elemento al texto "Clase jesus, ver videos"
            objeto.innerHTML = "Clase jesus, ver videos";
            break;

        case 'EMP':
            // Si el contenido es 'EMP', cambia el contenido del elemento al texto "Empresa, que no la tengo"
            objeto.innerHTML = "Empresa, que no la tengo";
            break;
    }
}
