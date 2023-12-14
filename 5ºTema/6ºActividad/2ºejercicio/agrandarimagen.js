// Esta línea espera a que todo el contenido HTML esté completamente cargado antes de ejecutar el código dentro de la función.
document.addEventListener('DOMContentLoaded', function () {

    // Seleccionamos todas las etiquetas HTML que tienen la clase "imagen" y las guardamos en una variable llamada "imagenes".
    const imagenes = document.querySelectorAll('.imagen');
  
    // Esta función se encarga de aumentar el tamaño de la imagen cuando el mouse entra en ella.
    function aumentarImagen(event) {
      // La propiedad "event.target" se refiere al elemento específico que activó el evento (en este caso, la imagen).
      // La línea siguiente cambia el tamaño de la imagen al aumentar su escala al 120% de su tamaño original.
      event.target.style.width = '300px';
    }
  
    // Esta función se encarga de restaurar el tamaño original de la imagen cuando el mouse sale de ella.
    function restaurarImagen(event) {
      // Aquí, estamos volviendo a establecer el tamaño de la imagen a su escala original, es decir, al 100% de su tamaño original.
      event.target.style.width = '50px';
    }
  
    // Este bloque de código recorre todas las imágenes seleccionadas y les añade "escuchadores de eventos" para detectar cuándo el mouse entra (mouseenter) o sale (mouseleave) de cada imagen.
    imagenes.forEach((imagen) => {
      // Cuando el mouse entra en la imagen, se ejecuta la función "aumentarImagen".
      imagen.addEventListener('mouseenter', aumentarImagen);
      // Cuando el mouse sale de la imagen, se ejecuta la función "restaurarImagen".
      imagen.addEventListener('mouseleave', restaurarImagen);
    });
  });
  