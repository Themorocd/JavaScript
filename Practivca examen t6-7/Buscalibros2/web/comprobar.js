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
    
    let sugerenciasDIV = document.createElement("div");
    
    sugerenciasDIV.id = "id";
    
    texto = document.getElementById("texto");
    
    texto.insertAdjacentHTML("afterend",sugerenciasDIV.outerHTML);
    
    document.getElementById("texto").onkeyup = autocompletar;
    
    
}

function autocompletar(event){
    
    let tecla = event.keyCode;
    
    if(tecla == 40){
        if(elementoseleccionado +1 <sugerencias.length){
            elementoseleccionado++;
        }
        mostrarsugerencias();
    }else if(tecla == 38){
        if(elementoseleccionado > 0){
            elementoseleccionado --;
        }
        mostrarsugerencias();
    }else if(tecla == 13){
        seleccionaelemento();
    }else{
        texto = document.getElementById("texto").value;
        if(tecla == 8 && texto==""){
            sugerencias = null;
            borrarlista();
            return;
        }
        
        if(cachesugerencias[texto] == null){
            
            peticion = new XMLHttpRequest();
            
            borrarlista();
            
            peticion.onreadystatechange = procesarespuesta;
            
            peticion.open("POST","buscolibro.jsp",true);
            
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
    
    document.getElementById("id").style.display ="block";
    
    
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
    
    zonasugerencias.innerHTML="";
    
    let listaHTML = sugerencias.formatealista(elementoseleccionado);
    
    zonasugerencias.innerHTML = listaHTML;
    
    zonasugerencias.style.display = "block";
    
    
}

function borrarlista(){
    document.getElementById("id").innerHTML="";
    document.getElementById("id").style.display="none";
}

Array.prototype.formatealista = function (){
    
    let codigoHTML ="<ul>";
    
    for (let x = 0; x < this.length; x++) {
        if(x === elementoseleccionado){
            codigoHTML +="<li class = \"seleccionado\">" +this[x]+"</li>";
        }else{
           codigoHTML +="<li>" +this[x]+"</li>";
       
        }
    }
    
    codigoHTML+="</ul>";
    return codigoHTML;
    
    
    
    
}

function pintodatos(){
    
    peticion = new XMLHttpRequest();
    
    peticion.onreadystatechange = procesarespuestadatos;
    
    peticion.open("POST","pintoinfo.jsp",true);
    
    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    let query = creaqueryinfo();
    
    peticion.send(creaqueryinfo());
    
 
}

function creaqueryinfo(){
      
   texto = document.getElementById("texto").value;
    
    return "texto="+encodeURIComponent(texto)+"&nocache="+Math.random();
    
}

function procesarespuestadatos(){
    
    if(peticion.readyState == 4 && peticion.status == 200){
        
        let respuestaJSON = peticion.responseText;
        
        let OBJSON = eval("("+respuestaJSON+")");
        
        let confirmo = OBJSON.length;
        
        let listainfo = document.getElementById("info");
        
        if(confirmo > 0){
           let contenidoHTML="<h1>Detalle de la factura </h1><table border='5'"
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