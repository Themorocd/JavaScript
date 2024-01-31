<%-- 
    Document   : facturas
    Created on : 31 ene 2024, 13:57:12
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
    
    mensaje ="<facturas>";
 
    
    for (facturas elem : List) {
        mensaje +="<factura>";    
        mensaje +="<producto>"+elem.getNombreproducto()+"</producto>";
        mensaje +="<cantidad>"+elem.getCantidad()+"</cantidad>";
        mensaje +="<precio>"+elem.getPrecio()+"</precio>";
        mensaje +="<descuento>"+elem.getDescuento()+"</descuento>";
        mensaje +="</factura>";   
        }
    
     
     mensaje +="</facturas>";
    out.print(mensaje);
    
    }else{
    mensaje ="<facturas>";
    mensaje +="<factura>";
    mensaje +="<producto></producto>";
    mensaje +="<cantidad></cantidad>";
    mensaje +="<precio></precio>";
    mensaje +="<descuento></descuento>";
    mensaje +="</factura>";
    mensaje +="</facturas>";
    out.print(mensaje);
    }
%>