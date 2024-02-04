/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


window.onload = iniciar;

peticion = null;

let categoria;
let producto;

function iniciar(){
    
    peticion = new XMLHttpRequest();
    
    peticion.onreadystatechange = procesarespuesta;
    
    peticion.open("POST","categoria.jsp",true);
    
    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    let query = creaquerycategoria();
    
    peticion.send(creaquerycategoria());
    
    document.getElementById("categoria").addEventListener("change",cargaproducto);

    
}

function creaquerycategoria(){
    
  categoria = document.getElementById("categoria").value;
    
    return "categoria="+encodeURIComponent(categoria)+"&nocache="+Math.random();
    
    
    
}

function procesarespuesta(){
    
    
    if(peticion.readyState == 4 && peticion.status == 200){
        
        let respuestaJson = peticion.responseText;
        let OBJSON = eval("("+respuestaJson+")");
        
        let comprobar = OBJSON.length;
        
        let listacategorias = document.getElementById("categoria");
        
        let contenidoHTML ="";
        
        if(comprobar > 0 ){
            
            contenidoHTML +="<option value=selecciona>-Selecciona-</option>";
            
            for (let x = 0; x < OBJSON.length; x++) {
                contenidoHTML +="<option value=\""+OBJSON[x].codigocategoria+"\">"+OBJSON[x].nombrecategoria+"</option>";
            }
            
            listacategorias.innerHTML = contenidoHTML;
            if(listacategorias.value !==""){
                cargaproducto();
            }
            
            
            
        }else{
            listacategorias.innerHTML="<option value=vacio>-vacio-</option>";
            
        }
        
        document.getElementById("producto").addEventListener("change",reseteoDatosproveedor);
        
    }
    
    
}

function cargaproducto(){
    
    document.getElementById("id").innerHTML="";
    
    
    peticion = new XMLHttpRequest();
    
    peticion.onreadystatechange = procesarespuestaproducto;
    
    peticion.open("POST","producto.jsp",true);
    
    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    let query = creaquerypedidos();
    
    peticion.send(creaquerypedidos());
    
    
    
}

function creaquerypedidos(){
    
     categoria = document.getElementById("categoria").value;
     
     producto = document.getElementById("producto").value;
    
     return "categoria="+encodeURIComponent(categoria)+"&producto="+encodeURIComponent(producto)+"&nocache="+Math.random();
}

function procesarespuestaproducto(){
    
     if(peticion.readyState == 4 && peticion.status == 200){
        
       let respuestaJson = peticion.responseText;
        let OBJSON = eval("("+respuestaJson+")");
        
        let comprobar = OBJSON.length;
        
        let lsitaproducto = document.getElementById("producto");
        
        let contenidoHTML ="";
        
        if(comprobar > 0 ){
            
            contenidoHTML +="<option value=selecciona>-Selecciona-</option>";
            
            for (let x = 0; x < OBJSON.length; x++) {
                contenidoHTML +="<option value=\""+OBJSON[x].codigoproducto+"\">"+OBJSON[x].nombreproducto+"</option>";
            }
            
            lsitaproducto.innerHTML = contenidoHTML;
            if(lsitaproducto.value !==""){
                document.getElementById("boton").addEventListener("click",cargaproveedor,true);
                
            }
            
            
            
        }else{
            lsitaproducto.innerHTML="<option value=vacio>-vacio-</option>";
            
        }
        
        //document.getElementById("producto").addEventListener("change",reseteoDatosproveedor);
        
    }
    
    
}

function reseteoDatosproveedor(){
    
    document.getElementById("id").innerHTML="";
    
}


function cargaproveedor(){
    
    document.getElementById("id").innerHTML="";
    
    peticion = new XMLHttpRequest();
    
    peticion.onreadystatechange = procesarespuestaproveedor;
    
    peticion.open("POST","proveedor.jsp",true);
    
    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    let query = creaqueryproveedor();
    
    peticion.send(creaqueryproveedor());
}

function creaqueryproveedor(){
    categoria = document.getElementById("categoria").value;
     
     producto = document.getElementById("producto").value;
    
     return "categoria="+encodeURIComponent(categoria)+"&producto="+encodeURIComponent(producto)+"&nocache="+Math.random();

}


function procesarespuestaproveedor(){
    
    if(peticion.readyState == 4 && peticion.status == 200){
    
    
    let respuestaJson = peticion.responseText;
        let OBJSON = eval("("+respuestaJson+")");
        
        let comprobar = OBJSON.length;
    
    
    let listaproveedor = document.getElementById("id");
    
    let contenidoHTML = "";
    
    if(comprobar > 0){
        contenidoHTML +="<h1>Datos del proveedor</h1><table border='5'"
        +"<tr>"
        +"<td>Compañia</td>"
        +"<td>contacto</td>"
        +"<td>cargo</td>"
        +"<td>direccion</td>"
        +"<td>ciudad</td>"
        +"<td>cp</td>"
        +"<td>pais</td>"
        +"<td>telefono</td>";


        for (let x = 0; x < OBJSON.length; x++) {
            
            contenidoHTML +="<tr><td>"+OBJSON[x].compañia+"<td>"+OBJSON[x].contacto+"<td>"+OBJSON[x].cargo+"<td>"+OBJSON[x].direccion+"<td>"+OBJSON[x].ciudad+"<td>"+OBJSON[x].cp+"<td>"+OBJSON[x].pais+"<td>"+OBJSON[x].telefono+"</td></tr>";
            
            
        }
        contenidoHTML +="</tr></table>"
        listaproveedor.innerHTML=contenidoHTML;
    }else{
        listaproveedor.innerHTML="<h1>No existe ningun proveedor</h1>";
    }
                    
    
    
    }
    
}


//document.getElementById("boton").addEventListener("click",cargaproveedor);