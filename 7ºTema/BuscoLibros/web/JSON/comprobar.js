/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


window.onload = iniciar;

peticion = null;

let texto;

let cachesugerencias = {};

let sugerencias = null;

let elementoseleccionado = -1;



function iniciar(){
    
    
    let sugerenciaDIV = document.createElement("div");
    
    sugerenciaDIV.id ="id";
    
    document.body.innerHTML += sugerenciaDIV.outerHTML;
    
    document.getElementById("texto").onkeyup = autocompletar;
    
    document.getElementById("texto").focus();
    
    
}


function autocompletar(event){
    
    let tecla = event.keyCode;
    
    if(tecla == 40){
        if(elementoseleccionado +1 < sugerencias.length){
            elementoseleccionado++;
        }
        mostrarsugerencias();
    }else if(tecla == 38) {
        if(elementoseleccionado > 0 ){
            elementoseleccionado--;
        }
        mostrarsugerencias();
    }else if(tecla == 13){
        seleccionaelemento();
    }else{
        texto = document.getElementById("texto").value;
        if(tecla == 8 && texto == ""){
            sugerencias = null;
            borrarlista();
            return;
        }
        
        if(cachesugerencias[texto] == null){
            
            peticion = new XMLHttpRequest();
            
            borrarlista();
            
            peticion.onreadystatechange = procesarespuesta;
            
            peticion.open("POST","buscolibros.jsp",true);
            
            peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            
            let query = creaquerylibros();
            
            peticion.send(creaquerylibros());
            
            
            
        }else{
            sugerencias = cachesugerencias[texto];
            actualizasugerencias();
        }
        
        
        
        
        
    }
        
    
    
}


function creaquerylibros(){
    
    texto = document.getElementById("texto").value;
    
    return "texto="+encodeURIComponent(texto)+"&nocache="+Math.random();
    
    alert("El mensaje es:"+texto);
}

function procesarespuesta(){
    
    if(peticion.readyState == 4 && peticion.status == 200){
        
        let respuestaJSON = peticion.responseText;
        
        sugerencias = eval("("+respuestaJSON+")");
        
        
        if(sugerencias.length == 0 ){
            sinresultados();
        }else{
            cachesugerencias[texto] = sugerencias;
            actualizasugerencias();
        }
        
        
        
        
    }
  
    
}

function sinresultados(){
    
    document.getElementById("id").innerHTML="No existe ningun libro asi";
    
    document.getElementById("id").style.display = "block";
    
    
    
}

function actualizasugerencias(){
    elementoseleccionado = -1;
    mostrarsugerencias();
}

function seleccionaelemento(){
    if(sugerencias[elementoseleccionado]){
        document.getElementById("texto").value = sugerencias[elementoseleccionado];
        pintodatos();
        borrarlista();
    }
} 

function mostrarsugerencias(){
          
    let zonasugerencias = document.getElementById("id");
    
    zonasugerencias.innerHTML ="";
    
    let listaHTML = sugerencias.formatealista(elementoseleccionado);
    
    zonasugerencias.innerHTML = listaHTML;
    
    
    zonasugerencias.style.display = "block";
    
    
}

function borrarlista(){

    document.getElementById("id").innerHTML="";
    document.getElementById("id").style.display = "none";
    
    
    
    
    
    
}

Array.prototype.formatealista = function (){
    //let codigohtml = "";
    let codigohtml = "<ul>";
    for (let x = 0; x < this.length; x++) {
        if (x === elementoseleccionado) {
            codigohtml += "<li class=\"seleccionado\">" + this[x] + "</li>";
        } else {
            codigohtml += "<li>" + this[x] + "</li>";
        }
    }
    codigohtml += "</ul>";
    return codigohtml;
};

function pintodatos(){
    
            peticion = new XMLHttpRequest();
            
            peticion.onreadystatechange = procesarespuestalibros;
            
            peticion.open("POST","pintoinfo.jsp",true);
            
            peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            
            let query = creaqueryinfolibros();
            
            peticion.send(creaqueryinfolibros());
    
    
}

function creaqueryinfolibros(){
    
    texto = document.getElementById("texto").value;
    
    
    return "texto="+encodeURIComponent(texto)+"&nocache="+Math.random();
    
    
}

function procesarespuestalibros(){
    
    
     if(peticion.readyState == 4 && peticion.status == 200){
        
        let respuestaJSON = peticion.responseText;
        
        let OBJSON = eval("("+respuestaJSON+")");
    
        let confirmar = OBJSON.length;
        
        let listainfo = document.getElementById("info");
        
        let contenidoHTML ="";
        if(confirmar > 0 ){
            
             contenidoHTML += "<h1>Detalle de la Factura </h1><table border='5'"
            +"<tr>"
            +"<td>Titulo</td>"
            +"<td>Autor</td>"
            +"<td>ISBN</td>"
            +"<td>Descripcion</td>"
            +"<td>Editorial</td>";
            
            for (let x = 0; x < OBJSON.length; x++) {
                contenidoHTML +="<tr><td>"+OBJSON[x].Titulo+"<td>"+OBJSON[x].Autor+"<td>"+OBJSON[x].ISBN+"<td>"+OBJSON[x].Descripcion+"<td>"+OBJSON[x].Editorial+"</td></tr>";
                
            }
            contenidoHTML +="</tr></table>";
            listainfo.innerHTML = contenidoHTML;
        }else{
            listainfo.innerHTML="<h1>No existe ninguna info del libro</h1>";
        }
    
    
}
}