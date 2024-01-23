<%-- 
    Document   : categoria
    Created on : 22 ene 2024, 22:00:16
    Author     : moro-
--%>
<%@page import="modelo.categorias"%>
<%@page import="java.util.ArrayList"%>
<%@page import="BBDD.BD" %>
<%@page contentType="application/json" pageEncoding="UTF-8"%>
<%
    String campo = request.getParameter("campo");
    //String campo = "frutas";
    String sql = "SELECT productos.NombreProducto, proveedores.NombreCompania FROM productos JOIN proveedores ON productos.IdProveedor = proveedores.IdProveedor JOIN categorias ON productos.IdCategoria = categorias.IdCategoria WHERE categorias.NombreCategoria LIKE '%" + campo + "%'";
    String mensaje = "";
    
    ArrayList<categorias> List = BBDD.BD.compruebocategoria(sql);

    if(!List.isEmpty()){
    response.setContentType("application/json");
    
    mensaje = "{ encontrado: 'si', productos: [";
   
    for (int x = 0; x < List.size(); x++) {
            categorias elem = List.get(x);
            
            mensaje +="{ \'producto\': \'" +elem.getProducto() + "\', \'proveedor\': \'"+elem.getProveedor()+ "\' }";
       
            if(x < List.size() - 1){
            mensaje +=",";
    }
    
    
    }
    
    
   
        
        
        mensaje += "]}";
        out.print(mensaje);
    }else{
    mensaje = "{ \"disponible\": \"no\", \"mensaje\": \"No existe ningún producto disponible de la categoría: " + campo + "\" }";
        out.print(mensaje);
    }


%>
