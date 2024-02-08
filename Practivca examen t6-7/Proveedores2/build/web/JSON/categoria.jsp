<%-- 
    Document   : categoria
    Created on : 7 feb 2024, 23:26:36
    Author     : moro-
--%>

<%@page import="java.util.ArrayList"%>
<%@page import="modelo.categorias"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%

     String sql = "Select * from categorias";
    
    String mensaje="";
    
    ArrayList<categorias> List = BBDD.BD.consultacategorias(sql);
    
    if(!List.isEmpty()){
    
        mensaje +="[";
        
        for (int x = 0; x < List.size(); x++) {
                
            
        
        categorias elem = List.get(x);
                
                mensaje +="{ codigocategoria: \""+elem.getId()+"\", nombrecategoria: \""+elem.getNombre()+"\" }";
                
                if( x < List.size() -1){
                mensaje +=",";
    }
                
            }
    
            mensaje +="]";
            
            out.print(mensaje);
    
    }else{
    
   mensaje +="[]";
            
            out.print(mensaje);
    
    
    }














%>
