<%-- 
    Document   : producto
    Created on : 7 feb 2024, 22:43:43
    Author     : moro-
--%>

<%@page import="modelo.producto"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/xml" pageEncoding="UTF-8"%>
<%


    String categoria = request.getParameter("categoria");
    String sql = "select * from productos where IdCategoria='"+categoria+"'";
    
    String mensaje ="";
    
    ArrayList<producto>List = BBDD.BD.consultaproductos(sql);
    
    if(!List.isEmpty()){
    
        mensaje +="<productos>";
        
        for (producto elem : List) {
                mensaje +="<producto>";
                mensaje +="<codigo>"+elem.getIdproveedor()+"</codigo>";
                mensaje +="<nombre>"+elem.getNombre()+"</nombre>";
                mensaje +="</producto>";
            }
            
            mensaje +="</productos>";
            out.print(mensaje);

    }else{
     mensaje +="<productos>";
      mensaje +="<producto>";
      mensaje +="</producto>";
      mensaje +="</productos>";
            out.print(mensaje);
    }
    












%>