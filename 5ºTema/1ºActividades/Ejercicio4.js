// Esta función se llama 'identificar' y recibe un parámetro 'objeto'
function identificar(objeto) {
    // Obtiene el valor del atributo 'name' del elemento HTML pasado como argumento y lo almacena en 'atrName'
    let atrName = objeto.name;

    // Obtiene el valor del atributo 'id' del elemento HTML pasado como argumento y lo almacena en 'atrId'
    let atrId = objeto.id;

    // Obtiene el valor del atributo 'value' del elemento HTML pasado como argumento y lo almacena en 'atrValue'
    let atrValue = objeto.value;

    // Obtiene el valor del atributo 'type' del elemento HTML pasado como argumento y lo almacena en 'atrType'
    let atrType = objeto.type;
    
    // Muestra una alerta con los datos obtenidos del elemento HTML pasado como argumento
    alert("Datos : Name" + atrName + " ID: " + atrId + " value: " + atrValue + " type: " + atrType);
}
