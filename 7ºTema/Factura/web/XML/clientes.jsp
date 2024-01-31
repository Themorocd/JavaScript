<%-- 
    Document   : clientes
    Created on : 31 ene 2024, 12:53:42
    Author     : moro-
--%>
<%@page import="java.util.ArrayList"%>
<%@page import="modelo.clientes"%>
<%@page contentType="text/xml" pageEncoding="UTF-8"%>

<%

    String sql = "Select * from clientes";
    
    String mensaje ="";
    
    ArrayList<clientes> List = BBDD.BD.compruebaclientes(sql);
    
    if(!List.isEmpty()){
    
    mensaje ="<clientes>";
    
    
    
    for (clientes elem : List) {
        mensaje +="<cliente>";    
        mensaje +="<codigo>"+elem.getIdCliente()+"</codigo>";
        mensaje +="<nombre>"+elem.getNombre()+"</nombre>";
        mensaje +="</cliente>";
        }
    
     
     mensaje +="</clientes>";
    out.print(mensaje);
    
    }else{
    mensaje ="<clientes>";
    mensaje +="<cliente>";
    mensaje +="<codigo></codigo>";
    mensaje +="<nombre></nombre>";
    mensaje +="</cliente>";
    mensaje +="</clientes>";
    out.print(mensaje);
    }
%>