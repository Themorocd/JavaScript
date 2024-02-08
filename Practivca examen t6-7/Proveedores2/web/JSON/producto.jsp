<%-- 
    Document   : producto
    Created on : 7 feb 2024, 23:31:57
    Author     : moro-
--%>

<%@page import="java.util.ArrayList"%>
<%@page import="modelo.producto"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%

     String categoria = request.getParameter("categoria");
    String sql = "select * from productos where IdCategoria='"+categoria+"'";
    
    String mensaje ="";
    
    ArrayList<producto>List = BBDD.BD.consultaproductos(sql);
    
    if(!List.isEmpty()){
    
    mensaje += "[";
    
    for (int x = 0; x < List.size(); x++) {
                
            
        
        producto elem = List.get(x);
                
                mensaje +="{ codigoproducto: \""+elem.getIdproveedor()+"\", nombreproducto: \""+elem.getNombre()+"\" }";
                
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