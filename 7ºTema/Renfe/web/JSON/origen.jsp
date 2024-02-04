<%-- 
    Document   : origen
    Created on : 2 feb 2024, 21:29:31
    Author     : moro-
--%>

<%@page import="modelo.provincias"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%

    
    String sql = "Select * from provincias";
    
    String mensaje="";
    
    ArrayList<provincias> List = BBDD.BD.consultaprovincias(sql);
    
    if(!List.isEmpty()){
        
        mensaje +="[";
        
        
        for (int x = 0; x < List.size(); x++) {
                
            provincias elem = List.get(x);
            
            mensaje +="{ codigoprovincia: \""+elem.getCodigo()+"\", nombreprovincia: \""+elem.getNombre()+"\" }";
        
        if(x < List.size() - 1){
        mensaje += ",";
    
    }    
        
}
     mensaje +="]";   
        
   out.print(mensaje);
    
    }else{
    mensaje ="[{";
    mensaje +="}]";
    out.print(mensaje);
    }











%>