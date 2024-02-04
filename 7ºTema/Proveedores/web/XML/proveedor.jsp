<%-- 
    Document   : proveedor
    Created on : 4 feb 2024, 20:02:02
    Author     : moro-
--%>

<%@page import="modelo.proveedor"%>
<%@page import="java.util.ArrayList"%>

<%@page contentType="text/xml" pageEncoding="UTF-8"%>
<%

    String producto = request.getParameter("producto");
    //String producto = "1";
    
    String sql = "select * from proveedores where idProveedor='"+producto+"'";
    
    String mensaje = "";
    
    ArrayList<proveedor>List = BBDD.BD.consultaproveedores(sql);
    
    
    if(!List.isEmpty()){
        
    mensaje +="<proveedor>";
    
    for (proveedor elem : List) {
    
            mensaje +="<compania>"+elem.getCompañia()+"</compania>";
            mensaje +="<contacto>"+elem.getContacto()+"</contacto>";
            mensaje +="<cargo>"+elem.getCargo()+"</cargo>";
            mensaje +="<direccion>"+elem.getDireccion()+"</direccion>";
            mensaje +="<ciudad>"+elem.getCiudad()+"</ciudad>";
            mensaje +="<cp>"+elem.getCp()+"</cp>";
            mensaje +="<pais>"+elem.getPais()+"</pais>";
            mensaje +="<telefono>"+elem.getTelefono()+"</telefono>";
            
        
    
    
        }
    
    mensaje +="</proveedor>";    
    out.print(mensaje);
    
    
    }else{
    mensaje +="<proveedor>";
    mensaje +="<proveedor>";    
    out.print(mensaje);
    
    }

    












%>