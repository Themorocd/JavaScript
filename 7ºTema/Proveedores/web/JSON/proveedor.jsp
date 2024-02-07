<%-- 
    Document   : proveedor
    Created on : 4 feb 2024, 23:22:30
    Author     : moro-
--%>

<%@page import="java.util.ArrayList"%>
<%@page import="modelo.proveedor"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%


    String producto = request.getParameter("producto");
    //String producto = "7";
    
    String sql = "select * from proveedores where idProveedor='"+producto+"'";
    
    String mensaje = "";
    
    ArrayList<proveedor>List = BBDD.BD.consultaproveedores(sql);
    
    
    if(!List.isEmpty()){
        
     mensaje +="[";
        
       for (int x = 0; x < List.size(); x++) {
            
        proveedor elem = List.get(x);
    
           mensaje +="{ compañia: \""+elem.getCompañia()+"\", contacto: \""+elem.getContacto()+"\", cargo: \""+elem.getCargo()+"\", direccion: \""+elem.getDireccion()+"\", ciudad: \""+elem.getCiudad()+"\", cp: \""+elem.getCp() +"\", pais: \""+elem.getPais()+"\", telefono: \""+elem.getTelefono()+"\" }";

      if(x < List.size() -1){
         mensaje +=",";
    }
    }
    mensaje +="]";
    out.print(mensaje);

    }else{
     mensaje +="[{}]";
      out.print(mensaje);
    }











%>