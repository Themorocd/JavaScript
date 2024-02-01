<%-- 
    Document   : autocompletar
    Created on : 1 feb 2024, 13:51:54
    Author     : moro-
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    
    String [] asignaturas = new String[7];
    String cadena = request.getParameter("texto");
    
    asignaturas[1]="Desarrollo de aplicaciones web entorno cliente";
    asignaturas[2]="Desarrollo de aplicaciones web entorno servidor";
    asignaturas[3]="Despliegue  de aplicaciones web";
    asignaturas[4]="Diseño de interfases web";
    asignaturas[5]="Desarrollo de algoritmos";
    asignaturas[6]="Desafio de java";
    
    
    String mensaje = "[";
    String asig = "";
    
    boolean entra = false;
    
    for (int x = 1; x < asignaturas.length; x++) {
            asig=asignaturas[x].substring(0,cadena.length());
            if(asig.equalsIgnoreCase(cadena)){
            String cad = "";
            cad = " '"+asignaturas[x]+"',";
            mensaje = mensaje+cad;
            entra=true;
    }
        }
        if(entra == false){
       mensaje = "[]";
    }else{
    mensaje = mensaje.substring(0,mensaje.length()-1);
    mensaje= mensaje+"]";
    }
    out.print(mensaje);

%>