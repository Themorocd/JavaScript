/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


window.onload = iniciar;

peticion = null;

let cliente;
let pedido;
let tabla;

function iniciar(){
    
    peticion = new XMLHttpRequest();
    
    peticion.onreadystatechange = procesarespuestacliente;
    
    peticion.open("POST","clientes.jsp",true);
    
    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    let query = creaqueryclientes();
    
    peticion.send(creaqueryclientes());
    
    document.getElementById("pedidos").addEventListener("change",cargapedido);
    
}

function creaqueryclientes(){
    
    cliente = document.getElementById("clientes").value;
    
    return "cliente="+encodeURIComponent(cliente) + "&nocache="+Math.random();
    
    
}


function procesarespuestacliente(){
    
    
    if(peticion.readyState == 4 && peticion.status == 200){
        
        
        let codigo = peticion.responseXML.getElementsByTagName("codigo");
        
        let nombre = peticion.responseXML.getElementsByTagName("nombre");
        
        let listaclientes = document.getElementById("clientes");
        
        let contenidoHTML="";
        
        
        
        if(codigo.length > 0 ){
            contenidoHTML="<option value=cargando>Cargando...</option>";
            
            for (let x = 0; x < codigo.length; x++) {
                contenidoHTML = "<option value=\""+codigo[x].textContent+"\">"+nombre[x].textContent +"</option>";
            }
            
            
            listaclientes.innerHTML=contenidoHTML;
            if(listaclientes.value !==""){
                cargapedido();
            }
        }else{
             listaclientes.innerHTML="<option value=vacio>vacio</option>";
           
        }
        
        
        
        
    }
    
    
    
    
}