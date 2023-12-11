// Esta función se llama 'pasamayusculas()'
function pasamayusculas() {
    // Obtiene el valor del elemento HTML con el ID "text" y lo guarda en la variable 'x'
    let x = document.getElementById("text").value;

    // Convierte el valor de 'x' a letras mayúsculas utilizando el método 'toUpperCase()'
    // y luego establece este valor convertido de vuelta en el campo de texto con ID "text"
    document.getElementById("text").value = x.toUpperCase();
}
