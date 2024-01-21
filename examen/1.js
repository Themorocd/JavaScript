window.onload = function () {
  let Nombre = document.getElementById("nombre");
  let Apellido = document.getElementById("apellidos");
  let DNI = document.getElementById("nif");
  let Telefono = document.getElementById("telefono");
  let Email = document.getElementById("email");
  let VIN = document.getElementById("vin");
  let Matricula = document.getElementById("matricula");
  let Fecha = document.getElementById("fecha");
  let Hora = document.getElementById("hora");
  let Entidad = document.getElementById("entidad");
  let Iban = document.getElementById("iban");
  let Errores = document.getElementById("errores");
  let Formulario = document.getElementById("formulario");

  Nombre.addEventListener("blur", function () {
    this.value = this.value.toUpperCase();
  });
  Apellido.addEventListener("blur", function () {
    this.value = this.value.toUpperCase();
  });

  function nombreVacio() {
    let nombre = Nombre.value.trim();

    if (nombre === "") {
      Errores.innerText = "Nombre no puede estar vacio";
      Nombre.focus();
      return false;
    }
    Errores.innerText = "";
    return true;
  }

  function comprueboNombre() {
    let nombre = Nombre.value.trim();
    let regexNombre = /^[A-Z\s]{3,15}$/;
    if (!regexNombre.test(nombre)) {
      Errores.innerText = "Formato de nombre no valido";
      Nombre.focus();
      return false;
    }
    Errores.innerText = "";
    return true;
  }

  function apellidoVacio() {
    let apellidos = Apellido.value.trim();

    if (apellidos === "") {
      Errores.innerText = "Apellido no puede estar vacio";
      Apellido.focus();
      return false;
    }
    Errores.innerText = "";
    return true;
  }

  function comprueboApellido() {
    let apellidos = Apellido.value.trim();
    let regexNombre = /^[A-Z\s]{3,15}$/;
    if (!regexNombre.test(apellidos)) {
      Errores.innerText = "Formato de Apellido no valido";
      Apellido.focus();
      return false;
    }
    Errores.innerText = "";
    return true;
  }

  function comprueboDNI() {
    let dni = DNI.value.trim();

    let regexDNI = /^[0-9]{8}[.-][a-zA-Z]{1}$/;

    if (dni === "") {
      Errores.innerText = "DNI no puede estar vacio";
      DNI.focus();
      return false;
    }

    if (!regexDNI.test(dni)) {
      Errores.innerText = "Formato de DNI no valido";
      DNI.focus();
      return false;
    }

    //let dnisinnada = dni.replace(/\D/g, "");

    let numero = dni.substring(0, 8).replace('-','');
    console.log(numero);
    let letra = dni.charAt(9).toUpperCase();
    console.log(letra);
    
    let Letrastodas = [
      "T",
      "R",
      "W",
      "A",
      "G",
      "M",
      "Y",
      "F",
      "P",
      "D",
      "X",
      "B",
      "N",
      "J",
      "Z",
      "S",
      "Q",
      "V",
      "H",
      "L",
      "C",
      "K",
      "E",
      "T",
    ];

    let resto = numero % 23;

    if (Letrastodas[resto] != letra) {
      Errores.innerText = "Letra de DNI no valida";
      DNI.focus();
      return false;
    }

    Errores.innerText = "";
    return true;
  }

  function compruebotelefono() {
    let telefono = Telefono.value.trim();

    if (telefono === "") {
      Errores.innerText = "Telefono no puede estar vacio";
      Telefono.focus();
      return false;
    }

    let regextelefono = /^(\(\+34\))?[0-9]{9}$/;
    if (!regextelefono.test(telefono)) {
      Errores.innerText = "Formato de Telefono no valido";
      Telefono.focus();
      return false;
    }
    Errores.innerText = "";
    return true;
  }
  function comprueboemail() {
    let email = Email.value.trim();

    if (email === "") {
      Errores.innerText = "Email no puede estar vacio";
      Email.focus();
      return false;
    }

    let regexemail = /^[\w][a-zA-Z\W]{0,}[\w]@[a-z]{0,}\.[a-z]{2,4}$/;
    if (!regexemail.test(email)) {
      Errores.innerText = "Formato de Email no valido";
      Email.focus();
      return false;
    }
    Errores.innerText = "";
    return true;
  }

  function compruebovim() {
    let vim = VIN.value.trim();

    if (vim === "") {
      Errores.innerText = "VIN no puede estar vacio";
      VIN.focus();
      return false;
    }

    let regexvim = /^[^IOQÑ,.-/*_?¿!´çªº]{17}$/;
    if (!regexvim.test(vim)) {
      Errores.innerText = "Formato de VIN no valido";
      VIN.focus();
      return false;
    }
    Errores.innerText = "";
    return true;
  }

  function compruebomatricula() {
    let matricula = Matricula.value.trim();

    if (matricula === "") {
      Errores.innerText = "Matricula no puede estar vacio";
      Matricula.focus();
      return false;
    }

    let regexmatricula = /^[0-9]{4}\s?[A-Z]{3}$/;
    if (!regexmatricula.test(matricula)) {
      Errores.innerText = "Formato de Matricula no valido";
      Matricula.focus();
      return false;
    }
    Errores.innerText = "";
    return true;
  }

  function compruebofecha() {
    let fecha = Fecha.value.trim();

    if (fecha === "") {
      Errores.innerText = "Fecha no puede estar vacio";
      Fecha.focus();
      return false;
    }
    let regexotro=/^(0[1-9]|[12]\d|3[01])[-/](0[1|3])[./]2024|[29/02/2024]|^(0[1-9]|[12]\d)[./](02)[./]2024$/;

    //let regexotro = /^(0[1-9]|[12][0-9]|3[01])[./]2024(0[1-3])|(0[1-9]|[12][0-9]|30)[./]2024|(0[13-9])|(0[1-9]|1[0-9]|2[0-9])[./]|[29/(02)/2024]$/;
    //let regexporpartes = /^\d{2}\/[0-1]\d\/[0-9]{4}$/;
    //let regexfecha =/^(1?[0-9]|2[0-9]|3[0-1])[./]01[./]2024|(1?[0-9]|2[0-9])[./]02[./]2024|(1?[0-9]|2[0-9]|3[0-1])[./]03[./]2024$/;
    if (!regexotro.test(fecha)) {
      Errores.innerText = "Formato de Fecha no valido";
      Fecha.focus();
      return false;
    }
    Errores.innerText = "";
    return true;
  }

  function compruebohora() {
    let hora = Hora.value.trim();

    if (hora === "") {
      Errores.innerText = "Hora no puede estar vacio";
      Hora.focus();
      return false;
    }

    let regexhora =
      /^([08]|[09]|[10]|[11]|[12]|[13]){2}:[0-5][0-9]|[14]{2}:[0-2][0-9]|14:30$/;
    if (!regexhora.test(hora)) {
      Errores.innerText = "Formato de Hora no valido";
      Hora.focus();
      return false;
    }
    Errores.innerText = "";
    return true;
  }

  function validarIBAN() {
    let iban = Iban.value.trim();
    let entidad = Entidad.value.trim();
    let regexIban;

    switch (entidad) {
      case "C":
        regexIban = /^ES[0-9]{2}2100+[0-9]{16}$/;
        break;
      case "BS":
        regexIban = /^ES[0-9]{2}0049+[0-9]{16}$/;
        break;
      case "BK":
        regexIban = /^ES[0-9]{2}2038+[0-9]{16}$/;
        break;

      default:
       Errores.innerText='Entidad no puede estar vacia';
       Entidad.focus();
       return false;
    }
    
    if(iban === ''){
    
    Errores.innerText='Iban no puede estar vacio';
    Iban.focus();
    return false;
    
    }
    
    if(!regexIban.test(iban)){
    
        Errores.innerText='Formato de iban  no valido';
        Iban.focus();
        return false;
    }
    
    Errores.innerText='';
    return true;
    
    
  }

  Formulario.addEventListener("submit", function (event) {
    if (
      !nombreVacio() ||
      !comprueboNombre() ||
      !apellidoVacio() ||
      !comprueboApellido() ||
      !comprueboDNI() ||
      !compruebotelefono() ||
      !comprueboemail() ||
      !compruebovim() ||
      !compruebomatricula() ||
      !compruebofecha() ||
      !compruebohora() ||
      !validarIBAN()
    ) {
      event.preventDefault();
    } else {
        Errores.innerText='';
      //setTimeout(() => {
         alert('Todo Correcto');      
        let confirmar = confirm("¿Estas seguro de enviar?");
        if (confirmar) {
            Errores.innerText='';
        } else if(!confirmar){
        event.preventDefault();
        }
      //}, 1000);
    }
  });
};
