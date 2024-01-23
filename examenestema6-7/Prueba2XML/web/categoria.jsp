<%-- 
    Document   : categoria
    Created on : 23 ene. 2024, 12:55:56
    Author     : Andres
--%>

<%@page import="java.util.ArrayList"%>
<%@page import="modelo.categorias"%>
<%@page contentType="text/xml" pageEncoding="UTF-8"%>
<%

    String catego = request.getParameter("campo");
    //String catego = "vino";
    String mensaje ="";
    
    String sql = "SELECT productos.NombreProducto, proveedores.NombreCompania FROM productos JOIN proveedores ON productos.IdProveedor = proveedores.IdProveedor JOIN categorias ON productos.IdCategoria = categorias.IdCategoria WHERE categorias.NombreCategoria LIKE '%" + catego + "%'";
    
    ArrayList<categorias> List = BBDD.BD.compruebocategoria(sql);
    
    if(!List.isEmpty()){
    mensaje = "<respuesta>";
    mensaje +="<encontrado>si</encontrado>";
    mensaje +="<disponible>";
    mensaje +="<productos>";
    
    for (categorias elem : List) {
            
        mensaje+="<producto>"+elem.getProducto()+"</producto>";
        mensaje+="<proveedor>"+elem.getProveedor()+"</proveedor>";
    
    
        }
        
        
    mensaje +="</productos>";
    mensaje +="</disponible>";
    mensaje +="</respuesta>";
    out.print(mensaje);
    
    
    
    
    
    }else{
    mensaje = "<respuesta>";
    mensaje +="<encontrado>no</encontrado>";
    mensaje +="</respuesta>";
    out.print(mensaje);
    }
    
    










%>
