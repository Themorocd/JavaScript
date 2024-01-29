<%-- 
    Document   : peliculas
    Created on : 29 ene 2024, 21:07:25
    Author     : moro-
--%>

<%@page import="modelo.pelicula"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/xml" pageEncoding="UTF-8"%>
<%
    String categoria = request.getParameter("categoria");
    String videoclub= request.getParameter("videoclub");
    String sql="select title from film where film_id in(select film_id from film_category where category_id="+categoria+" and film_id in(select film_id from inventory where store_id="+videoclub+"))";
    String mensaje = "";
    ArrayList<pelicula>List = BBDD.BD.consultapelis(sql);
    
    
    if(!List.isEmpty()){
    
    
    mensaje = "<categoria>";
    mensaje += "<tienda>";
    
    
    for (pelicula elem : List) {
            
            mensaje +="<pelicula>"+elem.getNombre()+"</pelicula>";
        }
        
    mensaje +="</tienda>";
    mensaje +="</categoria>";
    out.print(mensaje);
        
    
    }else{
     
      mensaje = "<categoria>";
      mensaje += "<tienda>";
      
      
      mensaje +="<nombre></nombre>";
      
      mensaje +="</tienda>";
      mensaje +="</categoria>";
      
      out.print(mensaje);
     
    }


%>