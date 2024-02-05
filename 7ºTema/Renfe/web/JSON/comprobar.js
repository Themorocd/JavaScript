/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


window.onload = iniciar;

peticion = null;

let texto; 

let elementoseleccionado = -1;

let cachesugerencias ={};

let sugerencias = null;

  let fechasalida;
    
    let fechavuelta;
     
    let horarioSalida;
    let horarioRegreso ;
   
    
    
    let adultos; 
  
    let ninos;
     
    let bebes;
    
   let provincias;
    


function iniciar(){
    
    
    
    
    leoorigen();
    
    let sugerenciasdiv = document.createElement("div");
    
    sugerenciasdiv.id = "sugerencias";
    
    //document.body.innerHTML += sugerenciasdiv.appendChild("relativo");
    
     document.getElementById("relativo").appendChild(sugerenciasdiv);

    
    document.getElementById("texto").onkeyup = autocompletar;
    
    document.getElementById("texto").focus();
    
    document.getElementById("boton").addEventListener("click",compruebodatos);
    
    
}

function autocompletar(event){
    
    let tecla = event.keyCode;
    
    if(tecla == 40){
        
        if(elementoseleccionado + 1 < sugerencias.length){
            
            elementoseleccionado ++;
       
    }
    mostrarsugerencias();
 
    } else if(tecla == 38){
        
        if(elementoseleccionado > 0 ){
            
            elementoseleccionado --;
            
        }
        mostrarsugerencias();
        
    } else if(tecla == 13){
        
        seleccionaElemento();
        
    }else{
        texto = document.getElementById("texto").value;
        
        if(tecla == 8 && texto == ""){
            
            sugerencias = null;//para evitar que al darle intro sin nada me pinte algo
            
            borrarlista();
            
            return;
            
        }
        
        
        if(cachesugerencias[texto] == null){
           
            peticion = new XMLHttpRequest();
            
            borrarlista();
            
            peticion.onreadystatechange = procesarespuesta;
            
            peticion.open("POST","autocompletar.jsp",true);
            
            peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            let query = creaquery();
            
            peticion.send(creaquery());
            
        } else{
            
            sugerencias = cachesugerencias[texto];
            
            actualizarsugerencias();
        }
        
        
        
    }
    
}

function creaquery(){
    
    provincias = document.getElementById("provincias").value;
    
    texto = document.getElementById("texto").value;
    
    return "provincias="+encodeURIComponent(provincias)+"&texto="+encodeURIComponent(texto)+"&nocache="+Math.random();
    
    
}

function procesarespuesta(){
    
    if(peticion.readyState == 4 && peticion.status == 200){
        
        let respuestaJSON = peticion.responseText;
        
        sugerencias = eval("("+respuestaJSON+")");
        
        if(sugerencias.length == 0){
            sinresultados();
        }else{
            cachesugerencias[texto] = sugerencias;
            actualizarsugerencias();
        }
        
        
        
        
    }
    
    
}

function sinresultados(){
    
    document.getElementById("sugerencias").innerHTML="No existen resultados";
    
    document.getElementById("sugerencias").style.display = "block";
    
    
}

function actualizarsugerencias(){
    
    
    elementoseleccionado = -1;
    
    mostrarsugerencias();
    
}


function seleccionaElemento(){
    
    if(sugerencias[elementoseleccionado]){
        
        document.getElementById("texto").value = sugerencias[elementoseleccionado];
        
        borrarlista();
        
        
    }
 
}

function mostrarsugerencias(){
    
    
    let zonasugerencias = document.getElementById("sugerencias");
    
    zonasugerencias.innerHTML = "";
    
    let listaHTML = sugerencias.formatealista(elementoseleccionado);
    
    zonasugerencias.innerHTML = listaHTML;
    
    zonasugerencias.style.display ="block";
    
    
    
    
}

function borrarlista(){
    
    document.getElementById("sugerencias").innerHTML ="";
    
    document.getElementById("sugerencias").style.display ="none";
    
}

Array.prototype.formatealista = function(){
    
    let codigohtml ="";
    
    codigohtml="<ul>";
    
    for (let x = 0; x < this.length; x++) {
        
        if(x == elementoseleccionado){
            
         codigohtml += "<li class=\"seleccionado\">" + this[x] + "</li>";
        
        } else {
        
            codigohtml += "<li>" + this[x] + "</li>";
       
        }
    }
   
    codigohtml += "</ul>";
   
    return codigohtml;

}


function compruebodatos(){
    
    let fechas = compruebofechas();
    
    let horas = compruebohoras();
    
    let pasajeros = compruebapasajeros();
    
    console.log("Fechas:", fechas);
    console.log("Horas:", horas);
    console.log("Pasajeros:", pasajeros);
    
    if(fechas == true && horas == true && pasajeros == true){
        
         peticion = new XMLHttpRequest();
         
         peticion.onreadystatechange = procesarespuestareserva;
         
         peticion.open("POST","reserva.jsp",true);
         
         peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded: charset=UTF-8");

         let query = creaqueryreserva();
         
         console.log("fechavuelta antes del send:"+fechavuelta);
         
         
         peticion.send(creaqueryreserva());
        
         //console.log("Redirigiendo...");
        
         //window.location.href = "/Renfe/JSON/reserva.jsp";
         
    }
    
}

function creaqueryreserva(){
    
     fechasalida = document.getElementById("fechaSalida").value;
   
     fechavuelta = document.getElementById("fechaRegreso").value;
     
     horarioSalida = document.querySelector('input[name="salida"]:checked');
     horarioRegreso = document.querySelector('input[name="regreso"]:checked');
    horarioSalida = horarioSalida.value;
     console.log("horarioSalida:"+horarioSalida);
    horarioRegreso = horarioRegreso.value;
     console.log("horarioRegreso:"+horarioRegreso);
     adultos = parseInt(document.getElementById("adultos").value); 
     console.log("adultos:"+adultos);
     ninos = parseInt(document.getElementById("ninos").value);
     console.log("ninos:"+ninos);
     bebes = parseInt(document.getElementById("bebes").value);
     console.log("bebes:"+bebes);
    provincias = document.getElementById("provincias").value;
    console.log("provincia:"+provincias);
    texto = document.getElementById("texto").value;
    console.log("texto:"+texto);
    return "fechasalida="+encodeURIComponent(fechasalida)+"&fechavuelta="+encodeURIComponent(fechavuelta)+"&horarioSalida="+encodeURIComponent(horarioSalida)+"&horarioRegreso="+encodeURIComponent(horarioRegreso)+"&adultos="+encodeURIComponent(adultos)+"&ninos="+encodeURIComponent(ninos)+"&bebes="+encodeURIComponent(bebes)+"&provincias="+encodeURIComponent(provincias)+"&texto="+encodeURIComponent(texto)+"&nocache="+Math.random();
  
}

function procesarespuestareserva(){
     if(peticion.readyState == 4 && peticion.status == 200){
          console.log("Solicitud exitosa:", peticion.responseText);
         // Puedes redirigir aquí si es necesario
   
        document.location.href = "/Renfe/JSON/reserva.jsp";
      return;
      } 
     
}

function compruebofechas(){
    
    let fechasalida = document.getElementById("fechaSalida").value;
    let fechavuelta = document.getElementById("fechaRegreso").value;
    
    
    if(fechasalida === fechavuelta){
        return true;
    }else{
        alert("Las fechas tienen que ser iguales");
        return false;
    }
    
    
    
}

function compruebohoras(){
    
    let horarioSalida = document.querySelector('input[name="salida"]:checked');
    let horarioRegreso = document.querySelector('input[name="regreso"]:checked');

    
    if (!horarioSalida || !horarioRegreso) {
        alert("Debes seleccionar tanto el horario de salida como el de regreso.");
        return false;
    }
     horarioSalida = horarioSalida.value;
     horarioRegreso = horarioRegreso.value;
    
    if(horarioSalida == "Mañana" && horarioRegreso == "Mañana"){
        alert("Las horas tienen que ser distintas");
        return false;
    }else if(horarioSalida == "Mañana" && horarioRegreso =="Tarde"){
        return true;
    }else if(horarioSalida == "Mañana" && horarioRegreso =="Noche"){
        return true;
    }else if(horarioSalida == "Tarde" && horarioRegreso =="Tarde"){
        alert("Las horas tienen que ser distintas");
        return false;
    }else if(horarioSalida == "Tarde" && horarioRegreso =="Mañana"){
        alert("No puedes volver por la mañana si llegas por la tarde");
        return false;
    }else if(horarioSalida == "Tarde" && horarioRegreso =="Noche"){
        return true;
    }else if(horarioSalida == "Noche" && horarioRegreso =="Noche"){
        return true;
    }else if(horarioSalida == "Noche" && horarioRegreso =="Tarde"){
        alert("No puedes volver por la tarde si llegas por la noche");
        return false;
    }else if(horarioSalida == "Noche" && horarioRegreso =="Mañana"){
        alert("No puedes volver por la mañana si llegas por la noche");
        return false;
    }
 
}

function compruebapasajeros(){
    
    let adultos = parseInt(document.getElementById("adultos").value);
    
    let ninos = parseInt(document.getElementById("ninos").value);
    
    let bebes = parseInt(document.getElementById("bebes").value);
    
    
    if(adultos+ninos+bebes <= 0){
        alert("Tiene que tiene un pasajero minimo");
        return false;
    }else if(bebes > 0 && adultos <= 0 ){
        alert("Un niño menor de 4 años no puede viajar sin un adulto");
        return false;
    }else if(adultos > 10 || ninos > 10){
        alert("No admitimos tantos pasajeros");
        return false;
    }else if(adultos+ninos+bebes > 0){
        return true;
    }else if(bebes > 0 && adultos > 0 ){
        return true;
    }
}

function leoorigen(){
    
    
    peticion = new XMLHttpRequest();
    
    
    peticion.onreadystatechange = procesarespuestaorigen;
    
    peticion.open("POST","origen.jsp",true);
    
    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
   
    let queryorigen = creaqueryorigen();
    
    peticion.send(creaqueryorigen());
    
}

function creaqueryorigen(){
    provincias = document.getElementById("provincias").value;
    
    return "provincias="+encodeURIComponent(provincias)+"&nocache="+Math.random();
    
}


function procesarespuestaorigen(){
    
    if(peticion.readyState == 4 && peticion.status == 200){
        
        let respuestaJSON = peticion.responseText;
        let objson = eval("("+respuestaJSON+")");
        
        let confirmo = objson.length;
        
        let listaorigen = document.getElementById("provincias");
        
        let contenidoHTML ="";
        
        if(confirmo > 0 ){
            contenidoHTML += "<option value=cargando>Cargando...</option>";
             for (let x = 0; x < objson.length; x++) {
                contenidoHTML += "<option value=\""+objson[x].codigoprovincia+"\">"+objson[x].nombreprovincia +"</option>";
            }
            
            
            listaorigen.innerHTML=contenidoHTML;

         }else{
             listaorigen.innerHTML="<option value=vacio>vacio</option>";
           
        }
        
    }
}
    
    
