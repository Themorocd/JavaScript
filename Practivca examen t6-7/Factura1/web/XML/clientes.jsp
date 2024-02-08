<%-- 
    Document   : clientes
    Created on : 7 feb 2024, 17:28:49
    Author     : moro-
--%>

<%@page import="java.util.ArrayList"%>
<%@page import="modelo.clientes"%>
<%@page contentType="text/xml" pageEncoding="UTF-8"%>
<%
    
    String sql = "select * from clientes";
    
    String mensaje = "";
    
    ArrayList<clientes> List = BBDD.BD.compruebaclientes(sql);
    
    if(!List.isEmpty()){
    mensaje +="<clientes>";
    
    
    for (clientes elem : List) {
        
        mensaje +="<cliente>";
        mensaje +="<codigo>"+elem.getIdCliente()+"</codigo>";
        mensaje +="<nombre>"+elem.getNombre()+"</nombre>";
        mensaje +="</cliente>";
    
    
        }
        
        mensaje +="</clientes>";
        
        out.print(mensaje);
    
    
    
    
    
    }else{
    mensaje +="<clientes>";
    mensaje +="<cliente>";
    mensaje +="</cliente>";
    mensaje +="</clientes>";
    out.print(mensaje);
    }
    












%>