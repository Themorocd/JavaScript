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
    
    document.getElementById("clientes").addEventListener("change",cargapedido);
    
}

function creaqueryclientes(){
    
    clientes = document.getElementById("clientes").value;
    
    return "clientes="+encodeURIComponent(clientes) + "&nocache="+Math.random();
    
    
}


function procesarespuestacliente(){
    
    
    if(peticion.readyState == 4 && peticion.status == 200){
        
        
        let codigo = peticion.responseXML.getElementsByTagName("codigo");
        
        let nombre = peticion.responseXML.getElementsByTagName("nombre");
        
        let listaclientes = document.getElementById("clientes");
        
        let contenidoHTML="";
        
        
        
        if(codigo.length > 0 ){
            contenidoHTML += "<option value=cargando>Cargando...</option>";
            
            for (let x = 0; x < codigo.length; x++) {
                contenidoHTML += "<option value=\""+codigo[x].textContent+"\">"+nombre[x].textContent +"</option>";
            }
            
            
            listaclientes.innerHTML=contenidoHTML;
            if(listaclientes.value !==""){
                cargapedido();
            }
        }else{
             listaclientes.innerHTML="<option value=vacio>vacio</option>";
           
        }
        // Luego de cargar los pedidos, agrega el event listener para cambios en "pedidos"     
    

        document.getElementById("pedidos").addEventListener("change", resetearCargafacturas);
   
    }

    
}

function cargapedido(){
    
    document.getElementById("facturas").innerHTML = "";
    
    peticion = new XMLHttpRequest();
    
    peticion.onreadystatechange = procesarespuestapedidos;
    
    peticion.open("POST","pedidos.jsp",true);
    
    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    let query = creaquerypedidos();
    
    peticion.send(creaquerypedidos());
    
         
    
}

function creaquerypedidos(){
    
    clientes = document.getElementById("clientes").value;
    
    pedidos = document.getElementById("pedidos").value;
    
    return "clientes="+encodeURIComponent(clientes)+"&pedidos="+encodeURIComponent(pedidos)+"&nocache="+Math.random();
    
    
}

function resetearCargafacturas() {
    // Elimina el contenido de "facturas" al cambiar de pedido
    document.getElementById("facturas").innerHTML = "";
}


function procesarespuestapedidos(){
    
    if(peticion.readyState == 4 && peticion.status == 200){
        
        
        let codigo = peticion.responseXML.getElementsByTagName("codigo");
        let fecha = peticion.responseXML.getElementsByTagName("fecha");
        let destinatario = peticion.responseXML.getElementsByTagName("destinatario");
        
        let listapedidos = document.getElementById("pedidos");
        
        let contenidoHTML ="";
        
        if(codigo.length > 0 ){
            
            for (let x = 0; x < codigo.length; x++) {
                contenidoHTML += "<option value=\""+codigo[x].textContent+"\">"+fecha[x].textContent +"-"+destinatario[x].textContent+"</option>";
                
            }
            
            listapedidos.innerHTML=contenidoHTML;
           
            if(listapedidos.value !==""){
                
                document.getElementById("boton").addEventListener("click",cargafacturas,true);
                
            }
        }else{
             listapedidos.innerHTML="<option value=vacio>vacio</option>";          
       }
        
    }
           
}
    
function cargafacturas(){
    
    document.getElementById("facturas").innerHTML = "";
    peticion = new XMLHttpRequest();
    
    peticion.onreadystatechange = procesarespuestafacturas;
    
    peticion.open("POST","facturas.jsp",true);
    
    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    let query = creaqueryfacturas();
    
    peticion.send(creaqueryfacturas());
 
    
}

function creaqueryfacturas(){
    
    clientes = document.getElementById("clientes").value;
    
    pedidos = document.getElementById("pedidos").value;
    
    return "clientes="+encodeURIComponent(clientes)+"&pedidos="+encodeURIComponent(pedidos)+"&nocache="+Math.random();
   
    
}
    
    
    
function procesarespuestafacturas(){
    if(peticion.readyState == 4 && peticion.status == 200){
        
        
        let producto = peticion.responseXML.getElementsByTagName("producto");
        let cantidad = peticion.responseXML.getElementsByTagName("cantidad");
        let precio = peticion.responseXML.getElementsByTagName("precio");
        let descuento = peticion.responseXML.getElementsByTagName("descuento");
        
        let listafacturas = document.getElementById("facturas");
        
        let contenidoHTML ="";
        let totalfactura =0;
        
        if(producto.length > 0 ){
            contenidoHTML += "<h1>Detalle de la Factura </h1><table border='5'"
            +"<tr>"
            +"<td>Producto</td>"
            +"<td>Cantidad</td>"
            +"<td>Precio</td>"
            +"<td>Descuento</td>"
            +"<td>Total</td>";
            for (let x = 0; x < producto.length; x++) {
                let precioUnitario = parseFloat(precio[x].textContent);
                let cantidadProducto = parseFloat(cantidad[x].textContent);
                let descuentoProducto = parseFloat(descuento[x].textContent);
                let totalProducto = (precioUnitario * cantidadProducto) - ((precioUnitario * cantidadProducto * descuentoProducto) / 100);

                contenidoHTML +="<tr><td>"+producto[x].textContent+"<td>"+cantidad[x].textContent+"<td>"+precio[x].textContent+"<td>"+descuento[x].textContent+"<td>"+totalProducto.toFixed(2)+"</td></tr>";
                totalfactura += totalProducto;
            }
            contenidoHTML +="</tr></table>";
            contenidoHTML += "<p>Total de la factura: " + totalfactura.toFixed(2) + "</p>";

            
            listafacturas.innerHTML=contenidoHTML;
           
            
        }else{
             listafacturas.innerHTML="<h1>No existe ninguna factura</h1>";          
       }
        
    }
}
