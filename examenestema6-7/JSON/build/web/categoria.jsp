<%-- 
    Document   : categoria
    Created on : 23 ene 2024, 17:12:24
    Author     : moro-
--%>

<%@page import="java.util.ArrayList"%>
<%@page import="modelo.categorias"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%

    String campo = request.getParameter("campo");
    //String campo = "vino";
    String mensaje = "";
    String sql = "SELECT productos.NombreProducto, proveedores.NombreCompania FROM productos JOIN proveedores ON productos.IdProveedor = proveedores.IdProveedor JOIN categorias ON productos.IdCategoria = categorias.IdCategoria WHERE categorias.NombreCategoria LIKE '%" + campo + "%'";

    ArrayList<categorias> List = BBDD.BD.compruebocategorias(sql);

    if (!List.isEmpty()) {
    
        mensaje = "[";
        
       for (int x = 0; x < List.size(); x++) {
            categorias elem = List.get(x);

            mensaje += "{producto: \"" + elem.getProducto() +"\", proveedor: \""+elem.getProveedor()+"\"}";
            //mensaje += "<proveedor>" + elem.getProveedor() + "</proveedor>";
            if(x < List.size() - 1){
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

