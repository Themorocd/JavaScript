<%-- 
    Document   : pedidos
    Created on : 31 ene 2024, 15:21:21
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
    
        mensaje ="[";

    
    for (int x = 0; x < List.size(); x++) {
            
        pedidos elem = List.get(x);
    
   
        mensaje +="{ codigoPedido: \""+elem.getIdPedido()+"\", fechaPedido: \""+elem.getFechaPedido()+"\", destinatario: \""+elem.getDestinatario()+"\" }";
        
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
