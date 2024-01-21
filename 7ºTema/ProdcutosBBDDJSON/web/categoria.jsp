<%-- 
    Document   : categoria
    Created on : 21 ene 2024, 20:58:58
    Author     : moro-
--%>


<%@page import="java.util.ArrayList"%>
<%@page import="Modelo.categoria"%>
<%@page import="BBDD.BD" %>
<%@page contentType="application/json" pageEncoding="UTF-8"%>

<%

    String catego = request.getParameter("catego");
    //String catego = "Frutas";
    String mensaje = "";

    String sql = "SELECT productos.NombreProducto, proveedores.NombreCompania FROM productos JOIN proveedores ON productos.IdProveedor = proveedores.IdProveedor JOIN categorias ON productos.IdCategoria = categorias.IdCategoria WHERE categorias.NombreCategoria LIKE '%" + catego + "%'";

    ArrayList<categoria> List = BBDD.BD.compruebocatego(sql);

    if (!List.isEmpty()) {
        response.setContentType("application/json"); // Configura el tipo de contenido
        //Asi le doy forma al json
         mensaje = "{ disponible: 'si', productos: [";

        for (int i = 0; i < List.size(); i++) {
            categoria elem = List.get(i);
            
            mensaje += "{ \"nombreProducto\": \"" + elem.getNombreProducto() + "\", \"nombreProveedor\": \"" + elem.getNombreContacto() + "\" }";
                      
            if (i < List.size() - 1) {
                mensaje+=",";
            }
        }
         mensaje += "]}";
        out.print(mensaje);
    } else {
        mensaje = "{ \"disponible\": \"no\", \"mensaje\": \"No existe ningún producto disponible de la categoría: " + catego + "\" }";
        out.print(mensaje);
    }


%>