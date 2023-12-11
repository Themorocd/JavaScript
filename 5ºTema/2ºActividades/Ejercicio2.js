// Esta función se llama 'infor()'
function infor() {
    // Obtiene el elemento 'select' del documento HTML con el ID "comidas" y lo almacena en la variable 'x'
    let x = document.getElementById("comidas");

    // Obtiene el texto de la opción seleccionada dentro del elemento 'select' 'x'
    let texto = x.options[x.selectedIndex].text;

    // Obtiene el valor de la opción seleccionada dentro del elemento 'select' 'x'
    let valor = x.options[x.selectedIndex].value;

    // Muestra una alerta (ventana emergente) con los datos obtenidos de la opción seleccionada
    alert("Datos : Texto: " + texto + " Valor: " + valor);
}
