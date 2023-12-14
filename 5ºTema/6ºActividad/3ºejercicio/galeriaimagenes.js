// Se define un array llamado 'images' que contiene objetos.
// Cada objeto representa una imagen con su ruta ('src') y su descripción.
const images = [
    { src: 'imagenes/descarga (1).jpg', description: 'Descripción de la imagen 1' },
    { src: 'imagenes/descarga (2).jpg', description: 'Descripción de la imagen 2' },
    { src: 'imagenes/descarga (3).jpg', description: 'Descripción de la imagen 3' },
    { src: 'imagenes/descarga (4).jpg', description: 'Descripción de la imagen 4' },
    // Puedes añadir más imágenes y sus descripciones aquí
  ];
  
  // Variable que guarda el índice de la imagen actual, comienza en 0.
  let indiceImagen = 0;
  
  // Evento que espera a que la página se cargue completamente antes de ejecutar el código.
  document.addEventListener('DOMContentLoaded', function() {
    // Se obtienen referencias a elementos HTML utilizando sus IDs.
    const imageElement = document.getElementById('image');
    const descriptionElement = document.getElementById('description');
    const Botonanterior = document.getElementById('prevButton');
    const SigBoton = document.getElementById('nextButton');
    const inicio = document.getElementById('startLink');
  
    // Función que cambia la imagen y la descripción según el índice proporcionado.
    function MostrarImagen(index) {
      const { src, description } = images[index];
      imageElement.src = src;
      descriptionElement.textContent = description;
    }
  
    // Función que actualiza la visibilidad de los botones de navegación.
    function ActualizarBoton() {
      Botonanterior.disabled = indiceImagen === 0;
      SigBoton.disabled = indiceImagen === images.length - 1;
    }
  
    // Función para iniciar la visualización de imágenes y botones.
    function initialize() {
      MostrarImagen(indiceImagen);
      ActualizarBoton();
    }
  
    // Evento cuando se hace clic en el botón "Siguiente".
    SigBoton.addEventListener('click', () => {
      if (indiceImagen < images.length - 1) {
        indiceImagen++;
        MostrarImagen(indiceImagen);
        ActualizarBoton();
      }
    });
  
    // Evento cuando se hace clic en el botón "Anterior".
    Botonanterior.addEventListener('click', () => {
      if (indiceImagen > 0) {
        indiceImagen--;
        MostrarImagen(indiceImagen);
        ActualizarBoton();
      }
    });
  
    // Evento cuando se hace clic en el enlace "Iniciar".
    inicio.addEventListener('click', (e) => {
      e.preventDefault();
      indiceImagen = 0;
      initialize();
    });
  
    // Se llama a 'initialize' para mostrar la primera imagen al cargar la página.
    initialize();
  });
  
  