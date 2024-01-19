<%-- 
    Document   : valido
    Created on : 17 ene. 2024, 10:22:40
    Author     : Andres
--%>

<%@page contentType="text/xml" pageEncoding="UTF-8"%>

<%
    String fechaNacimiento = request.getParameter("fecha_nacimiento");
    String telefono = request.getParameter("telefono");
    String codigoPostal = request.getParameter("codigo_postal");

    String mensaje = "Resultados...";
    String tel = "Telefono="+telefono+"";
    String cp = "Codigo_postal="+codigoPostal+"";
    String fecha ="Fecha_nacimiento="+fechaNacimiento+"";
    
%>

<respuesta>
    <mensaje><%= mensaje %></mensaje><br>
    <parametros>
        <telefono><%= tel %></telefono><br>
        <codigo_postal><%= cp %></codigo_postal><br>
        <fecha_nacimiento><%= fecha %></fecha_nacimiento>
    </parametros>
</respuesta>