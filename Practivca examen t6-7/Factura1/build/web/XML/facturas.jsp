<%-- 
    Document   : facturas
    Created on : 7 feb 2024, 17:49:41
    Author     : moro-
--%>

<%@page import="modelo.facturas"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/xml" pageEncoding="UTF-8"%>
<%
    
    String pedidos = request.getParameter("pedidos");

    String sql = "SELECT productos.NombreProducto AS nombre_producto, detalle_pedido.cantidad, ROUND(productos.PrecioUnidad, 2) AS precio, detalle_pedido.descuento FROM productos JOIN detalle_pedido ON detalle_pedido.idProducto = productos.idProducto WHERE detalle_pedido.idPedido = '"+pedidos+"'";
    
    String mensaje = "";
    
    ArrayList<facturas> List = BBDD.BD.compruebafacturas(sql);
    
    
    if(!List.isEmpty()){
    
        mensaje +="<facturas>";
        
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