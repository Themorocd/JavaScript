<%-- 
    Document   : categoria
    Created on : 21 ene 2024, 18:32:24
    Author     : moro-
--%>
<%@page import="Modelo.categoria"%>
<%@page import="java.util.ArrayList"%>
<%@page import="BBDD.BD" %>
<%@page contentType="text/xml" pageEncoding="UTF-8"%>

<%

    String catego = request.getParameter("catego");
    //String catego = "Frutas";
    String mensaje = "";

    String sql = "SELECT productos.NombreProducto, proveedores.NombreCompania FROM productos JOIN proveedores ON productos.IdProveedor = proveedores.IdProveedor JOIN categorias ON productos.IdCategoria = categorias.IdCategoria WHERE categorias.NombreCategoria LIKE '%" + catego + "%'";

    ArrayList<categoria> List = BBDD.BD.compruebocatego(sql);

    if (!List.isEmpty()) {
        response.setContentType("application/xml"); // Configura el tipo de contenido
        //Asi le doy forma al xml
        out.print("<respuesta>");
        out.print("<mensaje>");

        for (categoria elem : List) {
            out.print("<producto>");
            out.print("<nombreProducto>" + elem.getNombreProducto() + "</nombreProducto>");//Nombre producto es el tagname que pillo para el js
            out.print("<nombreContacto>" + elem.getNombreContacto() + "</nombreContacto>");//este igual 
            out.print("</producto>");
        }

        out.print("</mensaje>");
        out.print("</respuesta>");
        //hasta aqui es la forma xml
    } else {
        out.print("<h1>No existe ningun producto disponible de la categoria:[" + catego + "]</h1>");
    }


%>



