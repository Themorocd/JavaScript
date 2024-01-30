<%-- 
    Document   : categorias
    Created on : 30 ene. 2024, 12:26:25
    Author     : Andres
--%>

<%@page import="modelo.categorias"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%


    String sql = "Select * from category";
    
    String mensaje = "";
    
    ArrayList<categorias> List = BBDD.BD.compruebacategorias(sql);

    if(!List.isEmpty()){
    
    
    mensaje = "[";
   
   
    for(int x = 0; x<List.size(); x++){
    
        categorias elem = List.get(x);
    
               mensaje += "{ \'codigoCategoria\': \'"+elem.getCodigo()+"\', \'nombreCategoria\': \'"+elem.getNombre()+"\' }";

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

