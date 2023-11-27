//agrego un método llamado 'sin' al prototipo de Array
Array.prototype.sin = function (elemento) {

    // Compruebo si 'elemento' es nulo o indefinido
    if (elemento == null) {
        // Si 'elemento' es nulo o indefinido, muestro una alerta indicando que no puede ser nulo
        alert("NO PUEDE SER NULO")
    } else {
        // Si 'elemento' tiene un valor válido
        let rtdo = [];

        // Itera sobre el array actual (this)
        for (let x = 0; x < this.length; x++) {
            // Compruebo si el elemento en la posición actual es igual al elemento a eliminar
            if (this[x] == elemento) {
                // Si es igual, elimina el elemento actual del array usando splice()
                this.splice(x, 1);
            }
        }
        // Devuelve el array modificado
        return this;
    }
}
// Creo un array inicial
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Muestro el array original en el documento HTML
document.write(array1);
// Llamo al método 'sin' del array y elimino todas las ocurrencias del número 4(o el que ponga)
let rtdo = array1.sin(4);
// Añado un salto de línea al documento HTML
document.write("<br>");
// Muestro el resultado de la operación en la consola del navegador
console.log(rtdo);
// Muestro el array modificado en el documento HTML
document.write(rtdo);
