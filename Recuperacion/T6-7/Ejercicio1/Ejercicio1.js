window.onload = iniciar;

function iniciar(){
    let nodotabla = document.getElementById("tablaSolicitudes");
    document.getElementById("botonAgregar").addEventListener("click",agregar);
    let totalfilas = 0;

    document.querySelector("form").addEventListener("submit",function(event){
        event.preventDefault();
        agregar();
    });


function agregar(){

    let telefono = document.getElementById("telefono").value.trim();
    
    let patrontelefono = /^[0-9]{9}$/;
    let correo = document.getElementById("correo").value;

    let patroncorreo =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    let año = parseInt(document.getElementById("anoFabricacion").value);
    let fechaEntrega = document.getElementById("fechaEntrega").value;

    let patronfecha = /^(2024-(0[3-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]))$/;

    let kms = parseInt(document.getElementById("kms").value);

    let patronnombreapellido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/;

    let nombre = document.getElementById("nombre").value.trim();
    let apellidos = document.getElementById("apellidos").value.trim();



    if(document.getElementById("marca").value.trim()== "" ||
    document.getElementById("modelo").value.trim()== "" ||
    document.getElementById("anoFabricacion").value.trim()== "" ||
    document.getElementById("kms").value.trim()== "" ||
    document.getElementById("fechaEntrega").value.trim()== "" ||
    nombre== "" ||
    apellidos== "" ||
    correo== "" ||
    telefono== "" 
    ){
        alert("Todos los campos deben de estar rellenos")
    } else if(!patrontelefono.test(telefono)){
        alert("El telefono debe tener 9 digitos");
    } else if(!patroncorreo.test(correo)){
        alert("El correo debe tener el formato correcto");
    } else if(año < 2010 || año > 2023){
        alert("El año debe estar entre 2010 y 2023");
    } else if(!patronfecha.test(fechaEntrega)){
        alert("La fecha de entrega deber ser entre marzo y diciembre de 2023");
    } else if(kms < 0){
        alert("No puede ser menor a kilometro 0");
    } else if(!patronnombreapellido.test(nombre) || !patronnombreapellido.test(apellidos)){
        alert("El nombre y el apellido deben de contener letras y espacios");
    } else{
        let nodofila = document.createElement("tr");
        nodofila.id = "tr"+totalfilas;
        nodotabla.appendChild(nodofila);

        let nodocelda = document.createElement("td");
        nodofila.appendChild(nodocelda);
        if(totalfilas >=10){
            nodocelda.appendChild(document.createTextNode("0"+totalfilas));
        }else{
            nodocelda.appendChild(document.createTextNode("00"+totalfilas));
      
        }

        nodocelda = document.createElement("td");
        nodofila.appendChild(nodocelda);
        let nombre = document.getElementById("nombre").value.trim();
        nodocelda.appendChild(document.createTextNode(nombre));

        nodocelda = document.createElement("td");
        nodofila.appendChild(nodocelda);
        let apellidos = document.getElementById("apellidos").value.trim();
        nodocelda.appendChild(document.createTextNode(apellidos));

        nodocelda = document.createElement("td");
        nodofila.appendChild(nodocelda);
        let correo = document.getElementById("correo").value.trim();
        nodocelda.appendChild(document.createTextNode(correo));

        nodocelda = document.createElement("td");
        nodofila.appendChild(nodocelda);
        let telefono = document.getElementById("telefono").value.trim();
        nodocelda.appendChild(document.createTextNode(telefono));

        nodocelda = document.createElement("td");
        nodofila.appendChild(nodocelda);
        let marca = document.getElementById("marca").value.trim();
        nodocelda.appendChild(document.createTextNode(marca));

        nodocelda = document.createElement("td");
        nodofila.appendChild(nodocelda);
        let modelo = document.getElementById("modelo").value.trim();
        nodocelda.appendChild(document.createTextNode(modelo));

        nodocelda = document.createElement("td");
        nodofila.appendChild(nodocelda);
        let año = document.getElementById("anoFabricacion").value.trim();
        nodocelda.appendChild(document.createTextNode(año));

        nodocelda = document.createElement("td");
        nodofila.appendChild(nodocelda);
        let kms = document.getElementById("kms").value.trim();
        nodocelda.appendChild(document.createTextNode(kms));

        nodocelda = document.createElement("td");
        nodofila.appendChild(nodocelda);
        nodocelda.appendChild(document.createTextNode(document.getElementById("fechaEntrega").value));

        nodocelda = document.createElement("td");
        nodofila.appendChild(nodocelda);
        let botonEliminar = document.createElement("input");
        botonEliminar.type ="button";
        botonEliminar.id="borrar";
        botonEliminar.name=""+totalfilas;
        botonEliminar.value = "Eliminar";
        botonEliminar.onclick = function(){
            eliminar(this.name);
        };
        nodocelda.appendChild(botonEliminar);

        totalfilas +=1;

    }


}

function eliminar(obj){
    nodotabla.removeChild(document.getElementById("tr"+obj));
}
}