<%-- 
    Document   : autocompletar
    Created on : 2 feb 2024, 21:46:03
    Author     : moro-
--%>

<%@page import="java.util.ArrayList"%>
<%@page import="modelo.municipio"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%


    String origen = request.getParameter("provincias");
    String cadena = request.getParameter("texto");
    //String origen = "4";
    String sql = "Select * from municipios where codprov='"+origen+"'";
    
    ArrayList<municipio>List = BBDD.BD.consultamunicipio(sql);

    String mensaje = "[";
    String asig = "";
    
    boolean entra = false;
    
    for (int x = 0; x < List.size(); x++) {
            
        municipio elem = List.get(x);
            
            asig= elem.getNombre().substring(0,cadena.length());
            if(asig.equalsIgnoreCase(cadena)){
            String cad ="";
            cad =" '"+elem.getNombre()+"',";
            mensaje = mensaje+cad;
            entra = true;
    }
    
        }
        if(entra == false){
        mensaje ="[]";
    }else{
    mensaje = mensaje.substring(0,mensaje.length()-1);
    mensaje= mensaje+"]";
    }
    out.print(mensaje);









%>