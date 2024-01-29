<%-- 
    Document   : categoria
    Created on : 23 ene 2024, 19:58:37
    Author     : moro-
--%>

<%@page import="modelo.categorias"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    
    String campo = request.getParameter("campo");
    //String campo = "frutas";
    String mensaje = "";

    String sql = "SELECT productos.NombreProducto, proveedores.NombreCompania FROM productos JOIN proveedores ON productos.IdProveedor = proveedores.IdProveedor JOIN categorias ON productos.IdCategoria = categorias.IdCategoria WHERE categorias.NombreCategoria LIKE '%" + campo + "%'";

    ArrayList<categorias> List = BBDD.BD.compruebacategoria(sql);

    if (!List.isEmpty()) {

        mensaje = "[";
        
       for (int i = 0; i < List.size(); i++) {
               categorias elem = List.get(i);
                       
                   mensaje += "{producto: \"" + elem.getProductos() + "\", proveedor: \""+elem.getProveedores()+"\"}";
            
                   if( i < List.size() -1 ){
                   mensaje +=",";
    }
        }
        
        mensaje += "]";

        out.print(mensaje);

    } else {
        mensaje = "[]";
       

        out.print(mensaje);
    }












%>