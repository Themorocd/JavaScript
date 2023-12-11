// Esta función se llama 'cambiacolor' y toma un parámetro 'objeto'
function cambiacolor(objeto) {
    // Obtiene el color de fondo del objeto pasado como argumento y lo establece como el color de fondo del elemento con ID "boton"
    document.getElementById("boton").style.backgroundColor = objeto.style.backgroundColor;
}
