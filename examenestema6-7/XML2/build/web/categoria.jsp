<%-- 
    Document   : categoria
    Created on : 23 ene 2024, 19:26:11
    Author     : moro-
--%>

<%@page import="java.util.ArrayList"%>
<%@page import="modelo.categorias"%>
<%@page contentType="text/xml" pageEncoding="UTF-8"%>
<%

    String campo = request.getParameter("campo");
    //String campo = "frutas";
    String mensaje = "";

    String sql = "SELECT productos.NombreProducto, proveedores.NombreCompania FROM productos JOIN proveedores ON productos.IdProveedor = proveedores.IdProveedor JOIN categorias ON productos.IdCategoria = categorias.IdCategoria WHERE categorias.NombreCategoria LIKE '%" + campo + "%'";

    ArrayList<categorias> List = BBDD.BD.compruebacategoria(sql);

    if (!List.isEmpty()) {

        mensaje = "<respuesta>";
        mensaje += "<encontrado>si</encontrado>";
        mensaje += "<disponible>";
        mensaje += "<productos>";

        for (categorias elem : List) {

            mensaje += "<producto>" + elem.getProductos() + "</producto>";
            mensaje += "<proveedor>" + elem.getProveedores() + "</proveedor>";

        }
        mensaje += "</productos>";
        mensaje += "</disponible>";
        mensaje += "</respuesta>";

        out.print(mensaje);

    } else {
        mensaje = "<respuesta>";
        mensaje += "<encontrado>si</encontrado>";
        mensaje += "</respuesta>";

        out.print(mensaje);
    }


%>
