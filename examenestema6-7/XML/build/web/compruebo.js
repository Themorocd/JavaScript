/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


window.onload = iniciar;

peticion = null;

let campo;

function iniciar(){
    
    document.getElementById("comprobar").addEventListener("click",validar,true);
    
}

function validar(){
    
    peticion = new XMLHttpRequest();
    
    peticion.onreadystatechange = procesarrespuesta;
    
    peticion.open("POST","categoria.jsp",true);
    
    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    let query = CrearQuery();
    
    peticion.send(query);
    
    
}

function CrearQuery(){
    
    campo = document.getElementById("name").value;
    
    return "campo="+encodeURIComponent(campo) + "&nocache="+Math.random();
    
    
}

function procesarrespuesta(){
    
    if(peticion.readyState == 4 && peticion.status == 200){
        
        let productos = peticion.responseXML.getElementsByTagName("producto");
        let proveedores = peticion.responseXML.getElementsByTagName("proveedor");
        
        if(productos.length > 0){
            
            let contenidoHTML = "<h1>Productos disponibles de la categoria:"+campo+"</h1><table border = '5'>"
            +"<tr>"
            +"<td>Producto</td>"
            +"<td>Proveedor</td>";
    
            for (let x = 0; x < productos.length; x++) {
                
                contenidoHTML +="<tr><td>"+productos[x].textContent+"<td>"+productos[x].textContent+"</td></tr>";
                
                
            }
            
            contenidoHTML +="</tr></table>";
            
            document.getElementById("id").innerHTML = contenidoHTML;
            
            
            
        }else{
            let contenidoHTML = "<h1>No existe ningun producto disponible de la categoria: "+campo+"</h1>";
            document.getElementById("id").innerHTML = contenidoHTML;
        }
        
        
    }
    
    
    
}
