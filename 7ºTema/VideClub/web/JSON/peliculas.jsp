<%-- 
    Document   : peliculas
    Created on : 30 ene. 2024, 12:27:12
    Author     : Andres
--%>

<%@page import="modelo.pelicula"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/xml" pageEncoding="UTF-8"%>
<%
    String categoria = request.getParameter("categoria");
    String videoclub= request.getParameter("videoclub");
    String sql="select film_id,title from film where film_id in(select film_id from film_category where category_id="+categoria+" and film_id in(select film_id from inventory where store_id="+videoclub+"))";
    String mensaje = "";
    ArrayList<pelicula>List = BBDD.BD.consultapelis(sql);
    
    
   if(!List.isEmpty()){
    
    
   mensaje = "[";
   
   
    for(int x = 0; x<List.size(); x++){
    
        pelicula elem = List.get(x);
            
           mensaje +="{ \'codigoPelicula\': \'"+elem.getId()+"\',\'nombrePelicula\': \'"+elem.getNombre()+ "\' }";
    
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