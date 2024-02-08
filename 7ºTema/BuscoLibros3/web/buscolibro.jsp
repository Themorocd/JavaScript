<%-- 
    Document   : buscolibro
    Created on : 8 feb. 2024, 8:56:21
    Author     : Andres
--%>

<%@page import="modelo.Libro"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%

    
    String sql = "SELECT titulos.ISBN,titulos.Titulo,autor.Nombre AS autor, titulos.AnioEdicion,titulos.Descripcion, editorial.NombreEditorial AS editorial from titulos JOIN autor on titulos.IDautor = autor.IDAutor JOIN editorial on titulos.IDeditorial = editorial.IDEditorial";
    
    String cadena = request.getParameter("texto");
    
    ArrayList<Libro> List = BBDD.BD.consultalibros(sql);
    
    String mensaje = "[";
    
    String asig="";
    
    boolean entra = false;
    
    for (int x = 0; x < List.size(); x++) {
    
            
        Libro elem = List.get(x);
        
        asig = elem.getTitulo().substring(0,cadena.length());
        if(asig.equalsIgnoreCase(cadena)){
        
        String cad = "";
        cad = " '"+elem.getTitulo()+"',";
        mensaje = mensaje+cad;
        entra = true;
    }
    
}
    if(entra == false){
    mensaje = "[]";
    }else{
    mensaje = mensaje.substring(0,mensaje.length()-1);
    mensaje = mensaje+"]";
    }


    out.print(mensaje);






%>
