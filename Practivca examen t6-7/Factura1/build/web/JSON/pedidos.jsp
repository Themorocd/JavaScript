<%-- 
    Document   : pedidos
    Created on : 7 feb 2024, 18:39:06
    Author     : moro-
--%>

<%@page import="java.util.ArrayList"%>
<%@page import="modelo.pedidos"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%

     String cliente = request.getParameter("clientes");
    
    String sql = "Select * from pedidos where idCliente ='"+cliente+"'";
    
    String mensaje ="";
    
    ArrayList<pedidos> List = BBDD.BD.compruebapedidos(sql);
    
    if(!List.isEmpty()){
    mensaje +="[";
    
    for (int x = 0; x < List.size(); x++) {
 
    pedidos elem = List.get(x);
        
        
        mensaje +="{ codigoPedido: \""+elem.getIdPedido()+"\", fechaPedido: \""+elem.getFechaPedido()+"\", destinatario: \""+elem.getDestinatario()+"\" }";
       
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
