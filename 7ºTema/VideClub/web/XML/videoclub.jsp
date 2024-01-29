<%-- 
    Document   : videoclub
    Created on : 29 ene 2024, 18:13:49
    Author     : moro-
--%>

<%@page import="java.util.ArrayList"%>
<%@page import="modelo.videoclub"%>
<%@page contentType="text/xml" pageEncoding="UTF-8"%>
<%
    String id = request.getParameter("categoria");
    //String id = "2";
    String sql="select store_id,nombre from store where store_id in(select store_id from inventory where film_id in (select film_id from film_category where category_id="+id+"))";
    //String sql="SELECT DISTINCT store.store_id, store.nombre FROM store JOIN inventory ON store.store_id = inventory.store_id JOIN film_category ON inventory.film_id = film_category.film_id WHERE film_category.category_id = '2'";
    
    String mensaje = "";
    
    ArrayList<videoclub> List = BBDD.BD.compruebavideoclubs(sql);

    if(!List.isEmpty()){
    
    
    mensaje = "<tiendas>";
    mensaje += "<tienda>";
    
    
    for (videoclub elem : List) {
            mensaje +="<codigo>"+elem.getId()+"</codigo>";
            mensaje +="<nombre>"+elem.getNombre()+"</nombre>";
        }
        
    mensaje +="</tienda>";
    mensaje +="</tiendas>";
    out.print(mensaje);
        
    
    }else{
     
      mensaje = "<tiendas>";
      mensaje += "<tienda>";
      
      mensaje +="<codigo></codigo>";
      mensaje +="<nombre></nombre>";
      
      mensaje +="</tienda>";
      mensaje +="</tiendas>";
      
      out.print(mensaje);
     
    }












%>
