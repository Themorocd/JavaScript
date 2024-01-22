<%-- 
    Document   : categoria
    Created on : 22 ene 2024, 19:08:46
    Author     : moro-
--%>

<%@page import="modelo.categorias"%>
<%@page import="java.util.ArrayList"%>
<%@page import="BBDD.BD" %>
<%@page contentType="text/xml" pageEncoding="UTF-8"%>
<%
    String campo = request.getParameter("campo");
    //String campo = "frutas";
    String sql = "SELECT productos.NombreProducto, proveedores.NombreCompania FROM productos JOIN proveedores ON productos.IdProveedor = proveedores.IdProveedor JOIN categorias ON productos.IdCategoria = categorias.IdCategoria WHERE categorias.NombreCategoria LIKE '%" + campo + "%'";
    String mensaje = "";
    
    ArrayList<categorias> List = BBDD.BD.compruebocategoria(sql);

    if(!List.isEmpty()){
    response.setContentType("application/xml");
    mensaje = "<respuesta>";
    mensaje += "<encontrado>si</encontrado>";
    mensaje += "<productos>";
    
    
    for (categorias elem : List) {
            mensaje += "<producto>" + elem.getProducto()+"</producto>";
            mensaje += "<proveedor>" + elem.getProveedor()+"</proveedor>";
        }
        
        mensaje += "</productos>";
        mensaje += "</respuesta>";
        out.print(mensaje);
    }else{
    response.setContentType("application/xml");
        mensaje = "<respuesta>";
        mensaje += "<encontrado>no</encontrado>";
        mensaje += "<productos></productos>"; // Agregar etiqueta vacía para evitar error
        mensaje += "</respuesta>";
        out.print(mensaje);
    }


%>
