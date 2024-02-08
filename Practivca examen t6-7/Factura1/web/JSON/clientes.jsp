<%-- 
    Document   : clientes
    Created on : 7 feb 2024, 18:38:55
    Author     : moro-
--%>

<%@page import="java.util.ArrayList"%>
<%@page import="modelo.clientes"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%

    String sql = "select * from clientes";
    
    String mensaje = "";
    
    ArrayList<clientes> List = BBDD.BD.compruebaclientes(sql);
    
    if(!List.isEmpty()){
    mensaje +="[";
    
    for (int x = 0; x < List.size(); x++) {
 
    clientes elem = List.get(x);
        
        
        mensaje +="{ codigoCliente: \""+elem.getIdCliente()+"\", nombre: \""+elem.getNombre()+"\" }";
       
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
