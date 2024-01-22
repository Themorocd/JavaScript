/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

window.onload = iniciar; 

peticion = null;
let campo;

function iniciar (){
    
    document.getElementById("comprobar").addEventListener("click",validar,true);
    
}


function validar(){
    peticion = new XMLHttpRequest();
    
    peticion.onreadystatechange = procesarrespuesta;
    
    peticion.open("POST","categoria.jsp",true);
    
    peticion.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    
    let query = creaquery();
    peticion.send(creaquery());
}

function creaquery(){
    
    campo = document.getElementById("name").value;
    
    return "campo="+encodeURIComponent(campo) +"&nocache="+Math.random();
    
}


function procesarrespuesta(){
    
    if(peticion.readyState == 4 && peticion.status == 200){
    
    let JSON = peticion.responseText;
    let Objson = eval("("+JSON+")");
    
   
    let confirmo = Objson.encontrado;
    
    if(confirmo === "si" ){
        let contenidoHTML = "<h1>Productos disponibles de la categoria: "+ campo + "</h1><table border='5'"
        +"<tr>"
        +"<td>Producto</td>"
        +"<td>Proveedor</td>";

            for (let i = 0; i < Objson.productos.length; i++) {
                contenidoHTML +="<tr><td>"+Objson.productos[i].producto+"<td>"+Objson.productos[i].proveedor +"</td></tr>";
            }
            contenidoHTML +="</tr></table>";
            
            document.getElementById("id").innerHTML = contenidoHTML;
    }else{
     document.getElementById("id").innerHTML = "<h1>No existe ningun producto disponible de la categoria: " + campo + "</h1>";
        }
}

}