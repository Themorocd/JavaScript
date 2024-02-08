/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


window.onload = iniciar;

peticion = null;

let cliente;
let pedido;
let tabla;

function iniciar (){
    
    peticion = new XMLHttpRequest();
    
    peticion.onreadystatechange = procesarespuestacliente;
    
    peticion.open("POST","clientes.jsp",true);
    
    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    let query = crequeryclientes();
    
    peticion.send(crequeryclientes());
    
    document.getElementById("clientes").addEventListener("change",cargapedido);
    
    
    
    
}

function crequeryclientes(){
    
    clientes = document.getElementById("clientes").value;
    
    return "clientes="+encodeURIComponent(clientes)+"&nocache="+Math.random();
    
    
    
}

function procesarespuestacliente(){
    
    if(peticion.readyState == 4 && peticion.status == 200){
        
        
        let respuestaJSON = peticion.responseText;
        
        let OBJSON = eval("("+respuestaJSON+")");
        
        let confirmar = OBJSON.length;
        
        
        let listaclientes = document.getElementById("clientes");
        
        let contenidoHTML="";
        
        if(confirmar > 0 ){
            
            contenidoHTML +="<option value = cargando>Cargando...</optcion>";
            
            
            for (let x = 0; x < OBJSON.length; x++) {
                
                contenidoHTML +="<option value=\""+OBJSON[x].codigoCliente+"\" >"+OBJSON[x].nombre+"</optcion>";
            
                
            }
            
            listaclientes.innerHTML = contenidoHTML;
            
            if(listaclientes.value !== ""){
                cargapedido();
            }
            
        }else{
            listaclientes.innerHTML="<option value = vacio>vacio...</optcion>";
            
        }
        
        document.getElementById("pedidos").addEventListener("change",reseteartabla);
        
        
        
    }
    
    
}


function cargapedido(){
    
    
    document.getElementById("facturas").innerHTML="";
    
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


function reseteartabla(){
    
    document.getElementById("facturas").innerHTML="";
       
}

function procesarespuestapedidos(){
    
    if(peticion.readyState == 4 && peticion.status == 200){
        
       
        let respuestaJSON = peticion.responseText;
        
        let OBJSON = eval("("+respuestaJSON+")");
        
        let confirmar = OBJSON.length;
        
        let listapedidos = document.getElementById("pedidos");
        
        let contenidoHTML="";
        
        if(confirmar > 0 ){
            
             contenidoHTML +="<option value = cargando>Cargando...</optcion>";
            
            
            for (let x = 0; x < OBJSON.length; x++) {
                
              contenidoHTML +="<option value=\""+OBJSON[x].codigoPedido+"\">"+OBJSON[x].fechaPedido +"-"+OBJSON[x].destinatario+"</option>";
                
            }
            
            listapedidos.innerHTML = contenidoHTML;
            if(listapedidos.value !==""){
                document.getElementById("boton").addEventListener("click",cargafacturas,true);
            }
   
        }else{
             listapedidos.innerHTML="<option value=vacio>vacio</option>";          
   
        }
  
    }

}

function cargafacturas(){
    
    document.getElementById("facturas").innerHTML="";
    
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

function procesarespuestafacturas (){
    
    if(peticion.readyState == 4 && peticion.status == 200){
        
      
        let respuestaJSON = peticion.responseText;
        
        let OBJSON = eval("("+respuestaJSON+")");
        
        let confirmar = OBJSON.length;
        
        
        let listafacturas = document.getElementById("facturas");
        
        let contenidoHTML ="";
        
        let totalfactura =0;
        
        if(confirmar > 0 ){
            
            contenidoHTML +="<h1>Detalle de la factura </h1><table border='5'"
            +"<tr>"
            +"<td>Producto</td>"
            +"<td>Cantidad</td>"
            +"<td>Precio</td>"
            +"<td>Descuento</td>"
            +"<td>Total</td>";
    
            for (let x = 0; x < OBJSON.length; x++) {
                
                let preciounitario = parseFloat(OBJSON[x].Precio);
                let cantidadproducto = parseFloat(OBJSON[x].Cantidad);
                let descuentoproducto = parseFloat(OBJSON[x].Descuento);
                let totalproducto =(preciounitario*cantidadproducto) -((preciounitario*cantidadproducto*descuentoproducto)/ 100);
                
                contenidoHTML +="<tr><td>"+OBJSON[x].Producto+"<td>"+OBJSON[x].Cantidad+"<td>"+OBJSON[x].Precio+"<td>"+OBJSON[x].Descuento+"<td>"+totalproducto.toFixed(2)+"</td></tr>";
                totalfactura += totalproducto;
                
            }
            
            contenidoHTML +="</tr></table>";
            contenidoHTML +="<p>Total de la factura: "+totalfactura.toFixed(2)+"</p>";
            
            listafacturas.innerHTML=contenidoHTML;
            
            
            
        } else{
             listafacturas.innerHTML="<h1>No existe ninguna factura</h1>";          
     
        }

    } 
    
}