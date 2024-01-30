<%-- 
    Document   : videoclub
    Created on : 30 ene. 2024, 12:26:48
    Author     : Andres
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
    
    
   mensaje = "[";
   
   
    for(int x = 0; x<List.size(); x++){
    
        videoclub elem = List.get(x);
    
     mensaje +="{ \'codigoVideoclub\': \'"+elem.getId()+"\',\'nombreVideoclub\': \'"+elem.getNombre()+ "\' }";
    
            if(x < List.size() -1){
            mensaje +=",";
    }
            
        }
        
    mensaje +="]";
    
    out.print(mensaje);
        
    
    }else{
     
      mensaje = "[{}]";
      out.print(mensaje);
     
    }












%>
