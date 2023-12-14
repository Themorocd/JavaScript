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
        }else{
          apellidosInput.focus();
        }    
        return false;
      }
      console.log('nombre correcto');
      erroresDiv.innerText ='';
      return true;
    }
    function validarlongitud(){

      let nombre = nombreInput.value.trim();
      let apellidos = apellidosInput.value.trim();
      let isName = /^[A-Z\s?]{3,15}$/;

      if(!isName.test(nombre)){
        erroresDiv.innerText='Formato de Nombre no valido';
        nombreInput.focus();
        return false;
      }
      if(!isName.test(apellidos)){
        erroresDiv.innerText='Formato de Apellido no valido';
        apellidosInput.focus();
        return false;
      }
      erroresDiv.innerText ='';//Esto es para borrar los errores si estan bien
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
        let letra = dni.charAt(11).toUpperCase();

        let letrasvalidas = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];

        let calcularletras = numero%23;
       

        if(letrasvalidas[calcularletras] != letra){
            erroresDiv.innerText = 'Letra del DNI no valida';
            dniInput.focus();
            return false;
        }
      console.log("dni correcto");
      erroresDiv.innerText ='';//Esto es para borrar los errores si estan bien
      return true;
    }

    
     // Función para validar telefono usando una expresión regular
     function ValidarTelefono() {
        let telefono = telefonoInput.value.trim();
        let patrontelefono = /^(\+34)?[6-9]\d{8}$/;
        
      if (!patrontelefono.test(telefono)) {
        erroresDiv.innerText = 'Formato de Telefono incorrecto.';
        telefonoInput.focus();
        console.log('telefono no valido');
        return false;
      }
      console.log('telefono valido');
      erroresDiv.innerText ='';//Esto es para borrar los errores si estan bien
      return true;
    }

    // Función para validar E-mail usando una expresión regular
    function ValidarEmail() {
        let email = emailInput.value.trim();
        let patronemail = /^[\w.-]+@cdpjosecabrera\.es$/;
        
      if (!patronemail.test(email)) {
        erroresDiv.innerText = 'Formato de Email incorrecto.';
        emailInput.focus();
        console.log('email no valido');
        return false;
      }
      console.log('email valido');
      erroresDiv.innerText ='';//Esto es para borrar los errores si estan bien
      return true;
    }
    function ValidarMarca() {
        let marca = marcaInput.value.trim();
       
        let patronMarcayModelo = /^[\w.]+$/;
        
      if (!patronMarcayModelo.test(marca)) {
        erroresDiv.innerText = 'Formato de Marca incorrecto.';
        marcaInput.focus();
        console.log('marca no valido');
        return false;
        
      }
      console.log('marca  valido');
      erroresDiv.innerText ='';//Esto es para borrar los errores si estan bien
      return true;
    }
    function ValidarModelo(){

      let modelo = modeloInput.value.trim();
      let patronMarcayModelo = /^[\w.]+$/;

      if(!patronMarcayModelo.test(modelo)){
        erroresDiv.innerText = 'Formato de Modelo incorrecto';
        modeloInput.focus();
        console.log('modelo no valido');
        return false;
      }
      console.log('modelo valido');
      erroresDiv.innerText ='';//Esto es para borrar los errores si estan bien
      return true;
    }

    // Función para validar matrícula usando una expresión regular
    function validarMatricula() {
        let matricula = matriculaInput.value.trim();
        let patronMatricula = /^\d{4}[A-Z]{3}$/;

      if (!patronMatricula.test(matricula)) {
        erroresDiv.innerText = 'Formato de matrícula incorrecto.';
        matriculaInput.focus();
        console.log('matricula no valido');
        return false;
        
      }
      console.log('matricula  valido');
      erroresDiv.innerText ='';//Esto es para borrar los errores si estan bien
      return true;
    }

    // Función para validar Fecha usando una expresión regular
    function ValidarFecha() {
        let fecha = fechaInput.value.trim();
        let patronFecha = /^(0[1-9]|[12][0-3])\/(0[1-9]|1[0-2])\/2023$/;

      if (!patronFecha.test(fecha)) {
        erroresDiv.innerText = 'Formato de Fecha incorrecto.';
        fechaInput.focus();
        console.log('fecha no valido');
        return false;
        
      }
      console.log('fecha valido');
      erroresDiv.innerText ='';//Esto es para borrar los errores si estan bien
      return true;
    }
    function ValidarHora() {
        let hora = horaInput.value.trim();
        let patronHora = /^(10|11|12|13|14|15|16|17):[0-5][0-9]$/;

      if (!patronHora.test(hora)) {
        erroresDiv.innerText = 'Formato de Hora incorrecto.';
        horaInput.focus();
        console.log('hora no valido');
        return false;
      }
      console.log('hora  valido');
      erroresDiv.innerText ='';//Esto es para borrar los errores si estan bien
      return true;
    }

    

    function validarIBAN() {
      let entidad = entidadInput.value; // Obtener el valor del campo entidad
      let iban = ibanInput.value.trim();
      let patroniban;
    
      switch (entidad) {
        case "2100": // CAIXABANK
          patroniban = /^ES702100\d{16}$/;
          break;
        case "0049": // BANCO SANTANDER
          patroniban = /^ES700049\d{16}$/;
          break;
        case "2038": // BANKIA
          patroniban = /^ES702038\d{16}$/;
          break;
        default:
          erroresDiv.innerText = 'Entidad bancaria no válida.';
          entidadInput.focus();
          console.log('entidad no valido');
          return false;
      }
    
      if (!patroniban.test(iban)) {
        erroresDiv.innerText = 'Formato IBAN incorrecto.';
        ibanInput.focus();
        console.log('iban no valido');
        return false;
      }
      console.log('iban valido');
      erroresDiv.innerText ='';//Esto es para borrar los errores si estan bien
      return true;
      }
     
      
    
    // Event listener para el envío del formulario
    formulario.addEventListener('submit', function(event) {
      
      // Validar campos antes de enviar el formulario
      if (
        !validarNombreApellido() ||
        !validarlongitud() ||
        !validarDNI() ||
        !ValidarTelefono() ||
        !ValidarEmail() ||
        !ValidarMarca() ||
        !ValidarModelo() ||
        !validarMatricula() ||
        !ValidarFecha() ||
        !ValidarHora() || 
        !validarIBAN()
      ) {
        event.preventDefault(); // Evitar envío si hay errores
      } else {
        setTimeout(() => {
          let confirmacion = confirm('¿Estás seguro de enviar el formulario?');
          if (!confirmacion) {
            event.preventDefault(); // Cancelar envío si se cancela la confirmación
          }
        }, 1); // Espera 1 milisegundos antes de mostrar la confirmación        
      }
      
    });
  };

