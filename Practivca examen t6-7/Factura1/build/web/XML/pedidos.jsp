<%-- 
    Document   : pedidos
    Created on : 7 feb 2024, 17:38:49
    Author     : moro-
--%>

<%@page import="modelo.pedidos"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/xml" pageEncoding="UTF-8"%>
<%

    String cliente = request.getParameter("clientes");
    
    String sql = "Select * from pedidos where idCliente ='"+cliente+"'";
    
    String mensaje ="";
    
    ArrayList<pedidos> List = BBDD.BD.compruebapedidos(sql);
    
    if(!List.isEmpty()){
    
    mensaje +="<pedidos>";
    
    
    for (pedidos elem : List) {
    
        mensaje +="<pedido>";
        mensaje +="<codigo>"+elem.getIdPedido()+"</codigo>";
        mensaje +="<fecha>"+elem.getFechaPedido()+"</fecha>";
        mensaje +="<destinatario>"+elem.getDestinatario()+"</destinatario>";
        mensaje +="</pedido>";
        
            
        }
    
        mensaje +="</pedidos>";
        out.print(mensaje);
    

    }else{
    mensaje +="<pedidos>";
    mensaje +="<pedido>";
    mensaje +="</pedido>";
    mensaje +="</pedidos>";
    out.print(mensaje);
    }






%>
