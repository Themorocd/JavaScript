<%-- 
    Document   : categorias
    Created on : 29 ene 2024, 17:25:55
    Author     : moro-
--%>

<%@page import="modelo.categorias"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/xml" pageEncoding="UTF-8"%>
<%


    String sql = "Select * from category";
    
    String mensaje = "";
    
    ArrayList<categorias> List = BBDD.BD.compruebacategorias(sql);

    if(!List.isEmpty()){
    
    
    mensaje = "<categorias>";
    mensaje += "<categoria>";
    
    
    for (categorias elem : List) {
            mensaje +="<codigo>"+elem.getCodigo()+"</codigo>";
            mensaje +="<nombre>"+elem.getNombre()+"</nombre>";
        }
        
    mensaje +="</categoria>";
    mensaje +="</categorias>";
    out.print(mensaje);
        
    
    }else{
     
      mensaje = "<categorias>";
      mensaje = "<categoria>";
      
      mensaje +="<codigo></codigo>";
      mensaje +="<nombre></nombre>";
      
      mensaje +="</categoria>";
      mensaje +="</categorias>";
      
      out.print(mensaje);
     
    }











%>
