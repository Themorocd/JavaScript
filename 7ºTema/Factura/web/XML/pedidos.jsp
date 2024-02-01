<%-- 
    Document   : pedidos
    Created on : 31 ene 2024, 13:21:39
    Author     : moro-
--%>

<%@page import="modelo.pedidos"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/xml" pageEncoding="UTF-8"%>

<%  
    String cliente = request.getParameter("clientes");
    //String cliente = "ANATR";
    String sql = "Select * from pedidos where idCliente ='"+cliente+"'";
    
    String mensaje ="";
    
    ArrayList<pedidos> List = BBDD.BD.compruebapedidos(sql);
    
    if(!List.isEmpty()){
    
    mensaje ="<pedidos>";
    
    
    
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
    mensaje ="<pedidos>";
    mensaje +="<pedido>";
    mensaje +="<codigo></codigo>";
    mensaje +="<fecha></fecha>";
    mensaje +="<destinatario></destinatario>";
    mensaje +="</pedido>";
    mensaje +="</pedidos>";
    out.print(mensaje);
    }
%>