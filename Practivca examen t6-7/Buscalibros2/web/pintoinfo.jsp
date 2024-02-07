<%-- 
    Document   : pintoinfo
    Created on : 7 feb 2024, 19:41:59
    Author     : moro-
--%>

<%@page import="java.util.ArrayList"%>
<%@page import="modelo.Libro"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%

     String cadena = request.getParameter("texto");
    
    String sql = "SELECT titulos.ISBN,titulos.Titulo,autor.Nombre AS autor, titulos.AnioEdicion,titulos.Descripcion, editorial.NameEditorial AS editorial from titulos JOIN autor on titulos.IDautor = autor.IDAutor JOIN editorial on titulos.IDeditorial = editorial.IDEditorial WHERE titulos.Titulo ='" + cadena + "'";
    String mensaje = "";

    ArrayList<Libro> List = BBDD.BD.buscoinfolibro(sql);

    if (!List.isEmpty()) {

        mensaje += "[";
        
        for (int x = 0; x < List.size(); x++) {
            
                Libro elem = List.get(x);
                
                mensaje+="{Titulo: '"+elem.getTitulo()+"',Autor: '"+elem.getAutor()+"',ISBN: '"+elem.getIsbn()+"',Descripcion: '"+elem.getDescripcion()+"',Editorial: '"+elem.getEditorial()+"' }";
                
                if(x < List.size() -1){
                
                mensaje +=",";
    }
                
        
            }
            
            mensaje +="]";
            
            out.print(mensaje);
        
    }else{
    mensaje="[]";
    out.print(mensaje);
    }












%>