<%-- 
    Document   : categoria
    Created on : 4 feb 2024, 18:32:32
    Author     : moro-
--%>

<%@page import="java.util.ArrayList"%>
<%@page import="modelo.categorias"%>
<%@page contentType="text/xml" pageEncoding="UTF-8"%>
<%

    String sql = "Select * from categorias";
    
    String mensaje="";
    
    ArrayList<categorias> List = BBDD.BD.consultacategorias(sql);
    

    
    
    if(!List.isEmpty()){
    
    mensaje +="<categorias>";
    
    for (categorias elem : List) {
        
        mensaje +="<categoria>";
        mensaje +="<codigo>"+elem.getId()+"</codigo>";
        mensaje +="<nombre>"+elem.getNombre()+"</nombre>";
        mensaje +="</categoria>";

        }
    mensaje +="</categorias>";
    
    out.print(mensaje);
    
    
    }else{
     mensaje +="<categorias>";
      mensaje +="<categoria>";
       mensaje +="</categoria>";
      mensaje +="</categorias>";
      out.print(mensaje);
    }








%>