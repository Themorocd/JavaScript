window.onload = function() {
    // Obtener referencias a los campos del formulario
    var nombreInput = document.getElementById('nombre');
    var apellidosInput = document.getElementById('apellidos');
    var edadInput = document.getElementById('edad');
    var matriculaInput = document.getElementById('matricula');
    var erroresDiv = document.getElementById('errores');
    var formulario = document.getElementById('formulario');

    // Event listener para convertir a mayúsculas los campos NOMBRE y APELLIDOS al perder el foco
    nombreInput.addEventListener('blur', function() {
      this.value = this.value.toUpperCase();
    });

    apellidosInput.addEventListener('blur', function() {
      this.value = this.value.toUpperCase();
    });

    // Función para validar campos NOMBRE y APELLIDOS
    function validarNombreApellido() {
      var nombre = nombreInput.value.trim();
      var apellidos = apellidosInput.value.trim();
      var error = '';

      // Validación de campos vacíos
      if (nombre === '' || apellidos === '') {
        error = 'Nombre y apellidos son campos obligatorios.';
      }

      // Mostrar mensaje de error en el contenedor correspondiente
      if (error !== '') {
        erroresDiv.innerText = error;
        if (nombre === '') {
          nombreInput.focus();
        } else {
          apellidosInput.focus();
        }
        return false;
      }
      return true;
    }

    // Función para validar campo EDAD
    function validarEdad() {
      var edad = edadInput.value.trim();
      var numEdad = parseInt(edad);

      if (isNaN(numEdad) || numEdad < 18 || numEdad > 85) {
        erroresDiv.innerText = 'La edad debe ser un número entre 18 y 85.';
        edadInput.focus();
        return false;
      }
      return true;
    }

    // Función para validar matrícula usando una expresión regular
    function validarMatricula() {
      var matricula = matriculaInput.value.trim();
      var patronMatricula = /^\d{4}[A-Z]{3}$/;

      if (!patronMatricula.test(matricula)) {
        erroresDiv.innerText = 'Formato de matrícula incorrecto.';
        matriculaInput.focus();
        return false;
      }
      return true;
    }

    // Event listener para el envío del formulario
    formulario.addEventListener('submit', function(event) {
      // Validar campos antes de enviar el formulario
      if (
        !validarNombreApellido() ||
        !validarEdad() ||
        !validarMatricula()
      ) {
        event.preventDefault(); // Evitar envío si hay errores
      } else {
        var confirmacion = confirm('¿Estás seguro de enviar el formulario?');
        if (!confirmacion) {
          event.preventDefault(); // Cancelar envío si se cancela la confirmación
        }
      
      }
    });
  };