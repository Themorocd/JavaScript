<%-- 
    Document   : facturas
    Created on : 31 ene 2024, 15:22:11
    Author     : moro-
--%>

<%@page import="java.util.ArrayList"%>
<%@page import="modelo.facturas"%>
<%@page contentType="text/xml" pageEncoding="UTF-8"%>

<%  
    //String cliente = request.getParameter("clientes");
    String pedidos = request.getParameter("pedidos");
    //String pedidos = "10248";
    String sql = "SELECT productos.NombreProducto AS nombre_producto,detalle_pedido.cantidad AS cantidad,ROUND(productos.PrecioUnidad,1) AS precio,detalle_pedido.descuento AS descuento FROM productos,(SELECT * FROM detalle_pedido WHERE idPedido ='"+pedidos+"') AS detalle_pedido WHERE detalle_pedido.idProducto = productos.idProducto;";
    String mensaje ="";
    
    ArrayList<facturas> List = BBDD.BD.compruebafacturas(sql);
    
    if(!List.isEmpty()){
    
    mensaje ="[";
 
    for (int x = 0; x < List.size(); x++) {
          facturas elem = List.get(x);  
        
    
        mensaje +="{ Producto: \""+elem.getNombreproducto()+"\", Cantidad: \""+elem.getCantidad()+"\", Precio: \""+elem.getPrecio()+"\", Descuento: \""+elem.getDescuento()+"\" }";
        
       if(x < List.size() -1 ){
        mensaje +=",";
        }
    
    }
    mensaje +="]";
    out.print(mensaje);
    
    }else{
    mensaje ="[{";
    mensaje +="}]";
    out.print(mensaje);
    }
%>