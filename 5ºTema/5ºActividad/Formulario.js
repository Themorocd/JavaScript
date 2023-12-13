window.onload = function() {
    // Obtener referencias a los campos del formulario
    let nombreInput = document.getElementById('nombre');
    let apellidosInput = document.getElementById('apellidos');
    let dniInput = document.getElementById('dni');
    let telefonoInput = document.getElementById('telefono');
    let emailInput = document.getElementById('email');
    let marcaInput = document.getElementById('marca');
    let modeloInput = document.getElementById('modelo');
    let matriculaInput = document.getElementById('matricula');
    let fechaInput = document.getElementById('fecha');
    let horaInput = document.getElementById('hora');
    let entidadInput = document.getElementById('entidad');
    let ibanInput = document.getElementById('iban');
    let erroresDiv = document.getElementById('errores');
    let formulario = document.getElementById('formulario');

    // Event listener para convertir a mayúsculas los campos NOMBRE y APELLIDOS al perder el foco
    nombreInput.addEventListener('blur', function() {
      this.value = this.value.toUpperCase();
    });

    apellidosInput.addEventListener('blur', function() {
      this.value = this.value.toUpperCase();
    });

    // Función para validar campos NOMBRE y APELLIDOS
    function validarNombreApellido() {
        let nombre = nombreInput.value.trim();
        let apellidos = apellidosInput.value.trim();
        let error = '';

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

    // Función para validar campo DNI
    function validarDNI() {

        let dni = dniInput.value.trim();

        let patrondni = /^\d{2}\.\d{3}\.\d{3}-[a-zA-Z]$/;

        if(!patrondni.test(dni)){
            erroresDiv.innerText='Formato de dni no valido';
            dniInput.focus();
            return false;
        }

        let numero = dni.substring(0,10).replace(/\D/g, '');
        let letra = dni.charAt(10).toUpperCase();

        let letrasvalidas = 'TRWAGMYFPDXBNJZSQVHLCKE';

        let calcularletras = letrasvalidas.charAt(numero%24);

        if(letra !== calcularletras){
            erroresDiv.innerText = 'Letra del DNI no valida';
            dniInput.focus();
            return false;
        }
      return true;
    }

    
     // Función para validar telefono usando una expresión regular
     function ValidarTelefono() {
        let telefono = telefonoInput.value.trim();
        let patrontelefono = /^(\+34)?[6-9]\d{8}$/;
        
      if (!patrontelefono.test(telefono)) {
        erroresDiv.innerText = 'Formato de Telefono incorrecto.';
        telefonoInput.focus();
        return false;
      }
      return true;
    }
    // Función para validar E-mail usando una expresión regular
    function ValidarEmail() {
        let email = emailInput.value.trim();
        let patronemail = /^[\w.-]+@cdpjosecabrera\.es$/;
        
      if (!patronemail.test(email)) {
        erroresDiv.innerText = 'Formato de Email incorrecto.';
        emailInput.focus();
        return false;
      }
      return true;
    }
    function ValidarMarcayModelo() {
        let marca = marcaInput.value.trim();
        let modelo = modeloInput.value.trim();
        let patronMarcayModelo = /^[\w.]+$/;
        
      if (!patronMarcayModelo.test(marca)) {
        erroresDiv.innerText = 'Formato de Marca incorrecto.';
        marcaInput.focus();
        return false;
      }
      if(!patronMarcayModelo.test(modelo)){
        erroresDiv.innerText = 'Formato de Modelo incorrecto';
        modeloInput.focus();
        return false;
      }
      return true;
    }

    // Función para validar matrícula usando una expresión regular
    function validarMatricula() {
        let matricula = matriculaInput.value.trim();
        let patronMatricula = /^\d{4}[A-Z]{3}$/;

      if (!patronMatricula.test(matricula)) {
        erroresDiv.innerText = 'Formato de matrícula incorrecto.';
        matriculaInput.focus();
        return false;
      }
      return true;
    }

    // Función para validar Fecha usando una expresión regular
    function ValidarFecha() {
        let fecha = fechaInput.value.trim();
        let patronFecha = /^(0[1-9]|[12][0-3])\/(0[1-9]|1[0-2])\/2023$/;

      if (!patronFecha.test(fecha)) {
        erroresDiv.innerText = 'Formato de Fecha incorrecto.';
        fechaInput.focus();
        return false;
      }
      return true;
    }
    function ValidarHora() {
        let hora = horaInput.value.trim();
        let patronHora = /^([01]\d|2[0-3]):([0-5]\d)$/;

      if (!patronHora.test(hora)) {
        erroresDiv.innerText = 'Formato de Hora incorrecto.';
        horaInput.focus();
        return false;
      }
      return true;
    }

    function ValidarEntidad(){

        let entidad = entidadInput.value;

        if(entidad === ""){
            erroresDiv.innerText = 'Seleccione una entidad';
            entidadInput.focus();
            return false;
        }
        return true;
    }

    function validarIBAN() {
        let entidad = entidadInput.value;
        let iban = ibanInput.value.trim();
        let patroniban;
      
        switch (entidad) {
          case "2100": // CAIXABANK
          patroniban = /^ES2100\d{20}$/;
            break;
          case "0049": // BANCO SANTANDER
          patroniban = /^ES0049\d{20}$/;
            break;
          case "2038": // BANKIA
          patroniban = /^ES2038\d{20}$/;
            break;
          default:
            return false;
        }

        if(!patroniban.test(iban)){
            erroresDiv.innerText='Formato IBAN erroneo';
            ibanInput.focus();
            return false;
        }
      
        return true;
      }
      


    // Event listener para el envío del formulario
    formulario.addEventListener('submit', function(event) {
      // Validar campos antes de enviar el formulario
      if (
        !validarNombreApellido() ||
        !validarDNI() ||
        !validarMatricula() ||
        !ValidarTelefono() ||
        !ValidarEmail() ||
        !ValidarMarcayModelo() ||
        !ValidarFecha() ||
        !ValidarHora() || 
        !ValidarEntidad() ||
        !validarIBAN()
      ) {
        event.preventDefault(); // Evitar envío si hay errores
      } else {
        let confirmacion = confirm('¿Estás seguro de enviar el formulario?');
        if (!confirmacion) {
          event.preventDefault(); // Cancelar envío si se cancela la confirmación
        }
      
      }
    });
  };

