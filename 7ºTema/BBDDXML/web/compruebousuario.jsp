<%-- 
    Document   : compruebousuario
    Created on : 18 ene 2024, 18:11:46
    Author     : moro-
--%>

<%@page import="BBDD.BD" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>


<%
    String usuario = request.getParameter("usuario");
    String mensaje = "";

    boolean compruebousuario = BBDD.BD.compruebouser(usuario);

    if (compruebousuario) {

        mensaje = "El nombre [" + usuario + "] no esta disponible, prueba con: <br>"
                + "<respuesta><mensaje><ul>"
                 + "<li><a href='#' onclick='copiarTexto(\"124" + usuario + "a\");'>124" + usuario + "a</a></li>"
                + "<li><a href='#' onclick='copiarTexto(\"zz23" + usuario + "1\");'>zz23" + usuario + "1</a></li>"
                + "<li><a href='#' onclick='copiarTexto(\"" + usuario + "111\");'>" + usuario + "111</a></li>"
                + "<li><a href='#' onclick='copiarTexto(\"_" + usuario + "567\");'>_" + usuario + "567</a></li>"
                + "<li><a href='#' onclick='copiarTexto(\"" + usuario + "a09\");'>" + usuario + "a09</a></li>";

        mensaje += "</ul></mensaje></respuesta>";
        out.print(mensaje);
    } else {
        mensaje = "El nombre [" + usuario + "] esta disponible";
        out.print(mensaje);
    }


%>

