// Esta función se llama 'cambiocolor()'
function cambiocolor() {
    // Obtiene el valor del elemento con el ID "primera" y lo almacena en la variable 'x'
    let x = document.getElementById("primera").value;

    // Hace una copia del valor del elemento con el ID "primera" y la almacena en la variable 'x1'
    let x1 = document.getElementById("primera").value;

    // Convierte el valor de 'x' a letras mayúsculas y actualiza el contenido de 'x' con las letras mayúsculas
    x = x.toUpperCase();
    
    // Convierte el valor de 'x1' a letras minúsculas y actualiza el contenido de 'x1' con las letras minúsculas
    x1 = x1.toLowerCase();

    // Establece el valor de la segunda entrada con ID "segunda" al valor en mayúsculas de 'x'
    document.getElementById("segunda").value = x;

    // Establece el valor de la tercera entrada con ID "tercera" al valor en minúsculas de 'x1'
    document.getElementById("tercera").value = x1;
}
