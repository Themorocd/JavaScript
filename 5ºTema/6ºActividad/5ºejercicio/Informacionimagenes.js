// Este código se ejecuta cuando el documento HTML se ha cargado completamente.
document.addEventListener('DOMContentLoaded', function() {

    // Selecciona todas las imágenes dentro del contenedor con la clase 'images'.
    const images = document.querySelectorAll('.images img');
  
    // Obtiene el elemento HTML con el ID 'image-url' donde se mostrará la URL.
    const imageUrlDisplay = document.getElementById('image-url');
  
    // Recorre cada imagen encontrada.
    images.forEach(img => {
  
      // Cuando el cursor del ratón pasa sobre una imagen...
      img.addEventListener('mouseover', () => {
  
        // Obtiene la URL asociada a la imagen actual.
        const imageUrl = img.getAttribute('data-url');
  
        // Muestra la URL obtenida en el elemento 'image-url'.
        imageUrlDisplay.textContent = `URL: ${imageUrl}`;
      });
  
      // Cuando el cursor del ratón sale de la imagen...
      img.addEventListener('mouseout', () => {
  
        // Borra el contenido del elemento 'image-url' para ocultar la URL.
        imageUrlDisplay.textContent = '';
      });
    });
  });
  