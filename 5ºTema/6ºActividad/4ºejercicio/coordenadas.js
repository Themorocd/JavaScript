// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene el elemento con el ID 'info' y lo almacena en la variable infoDiv
    const infoDiv = document.getElementById('info');
  
    // Esta función se activa cuando se hace clic en cualquier parte del documento
    function mostrarCoordenadas(event) {
      // Obtiene las coordenadas X e Y del ratón en el momento del evento de clic
      const x = event.clientX;
      const y = event.clientY;
  
      // Actualiza el contenido del elemento 'infoDiv' con las coordenadas del ratón
      infoDiv.textContent = `Coordenadas del ratón: X = ${x}, Y = ${y}`;
    }
  
    // Esta función se activa cuando se presiona una tecla en el teclado
    function mostrarTeclaPulsada(event) {
      // Obtiene la tecla pulsada y su código correspondiente
      const tecla = event.key;
      const codigoTecla = event.keyCode || event.which;
  
      // Actualiza el contenido del elemento 'infoDiv' con la tecla pulsada y su código
      infoDiv.textContent = `Tecla pulsada: ${tecla} | Código: ${codigoTecla}`;
    }
  
    // Añade un listener al documento para capturar eventos de clic y llamar a la función mostrarCoordenadas
    document.addEventListener('click', mostrarCoordenadas);
  
    // Añade un listener al documento para capturar eventos de teclado y llamar a la función mostrarTeclaPulsada
    document.addEventListener('keydown', mostrarTeclaPulsada);
  });