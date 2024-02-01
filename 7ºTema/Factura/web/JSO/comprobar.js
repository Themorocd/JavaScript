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
        
        
        let respuestaJSON = peticion.responseText;
        let objson = eval("(" + respuestaJSON + ")");
        
        let confirmo = objson.length;
                
        let listaclientes = document.getElementById("clientes");
        
        let contenidoHTML="";
        
        
        
        if(confirmo > 0 ){
            contenidoHTML += "<option value=cargando>Cargando...</option>";
            
            for (let x = 0; x < objson.length; x++) {
                contenidoHTML += "<option value=\""+objson[x].codigoCliente+"\">"+objson[x].nombre +"</option>";
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
        
        
        let respuestaJSON = peticion.responseText;
        let objson = eval("(" + respuestaJSON + ")");
        
        let confirmo = objson.length - 1;
        
        let listapedidos = document.getElementById("pedidos");
        
        let contenidoHTML ="";
        
        if(confirmo > 0 ){
            
            for (let x = 0; x < objson.length; x++) {
                contenidoHTML += "<option value=\""+objson[x].codigoPedido+"\">"+objson[x].fechaPedido+"-"+objson[x].destinatario+"</option>";
                
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
        
        
       let respuestaJSON = peticion.responseText;
       let objson = eval("(" + respuestaJSON + ")");
        
        let confirmo = objson.length - 1;
        
        let listafacturas = document.getElementById("facturas");
        
        let contenidoHTML ="";
        let totalfactura =0;
        
        if(confirmo > 0 ){
            contenidoHTML += "<h1>Detalle de la Factura </h1><table border='5'"
            +"<tr>"
            +"<td>Producto</td>"
            +"<td>Cantidad</td>"
            +"<td>Precio</td>"
            +"<td>Descuento</td>"
            +"<td>Total</td>";
            for (let x = 0; x < objson.length; x++) {
                let precioUnitario = parseFloat(objson[x].Precio);
                let cantidadProducto = parseFloat(objson[x].Cantidad);
                let descuentoProducto = parseFloat(objson[x].Descuento);
                let totalProducto = (precioUnitario * cantidadProducto) - ((precioUnitario * cantidadProducto * descuentoProducto) / 100);

                contenidoHTML +="<tr><td>"+objson[x].Producto+"<td>"+objson[x].Cantidad+"<td>"+objson[x].Precio+"<td>"+objson[x].Descuento+"%<td>"+totalProducto.toFixed(2)+"</td></tr>";
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

document.getElementById("boton").addEventListener("click", cargafacturas);