<%-- 
    Document   : facturas
    Created on : 7 feb 2024, 18:39:16
    Author     : moro-
--%>

<%@page import="java.util.ArrayList"%>
<%@page import="modelo.facturas"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%

       String pedidos = request.getParameter("pedidos");

    String sql = "SELECT productos.NombreProducto AS nombre_producto, detalle_pedido.cantidad, ROUND(productos.PrecioUnidad, 2) AS precio, detalle_pedido.descuento FROM productos JOIN detalle_pedido ON detalle_pedido.idProducto = productos.idProducto WHERE detalle_pedido.idPedido = '"+pedidos+"'";
    
    String mensaje = "";
    
    ArrayList<facturas> List = BBDD.BD.compruebafacturas(sql);
    
    if(!List.isEmpty()){
    mensaje +="[";
    
    for (int x = 0; x < List.size(); x++) {
 
    facturas elem = List.get(x);
        
        
        mensaje +="{ Producto: \""+elem.getNombreproducto()+"\", Cantidad: \""+elem.getCantidad()+"\", Precio: \""+elem.getPrecio()+"\", Descuento: \""+elem.getDescuento()+"\" }";
       
        if(x < List.size() -1){
        mensaje +=",";
    }
        
    
    
        }
        
        mensaje +="]";
        
        out.print(mensaje);
    
    
    
    
    
    }else{
    mensaje+="[]";
    out.print(mensaje);
    }
















%>