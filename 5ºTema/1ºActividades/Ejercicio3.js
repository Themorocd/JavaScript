// Esta función se llama 'consultar()'
function consultar() {
    // Obtiene el elemento select del documento HTML con el ID "provincias"
    let objProvincia = document.getElementById("provincias");

    // Obtiene el texto del elemento option seleccionado dentro del elemento select
    let texto = objProvincia.options[objProvincia.selectedIndex].text;

    // Obtiene el valor del elemento option seleccionado dentro del elemento select
    let valor = objProvincia.options[objProvincia.selectedIndex].value;

    // Muestra una alerta (ventana emergente) con los datos obtenidos
    alert("Datos : texto " + texto + " valor " + valor);
}
