<%-- 
    Document   : clientes
    Created on : 31 ene 2024, 12:34:33
    Author     : moro-
--%>

<%@page import="java.util.ArrayList"%>
<%@page import="modelo.clientes"%>
<%

    String sql = "Select * from clientes";
    
    String mensaje ="";
    
    ArrayList<clientes> List = BBDD.BD.compruebaclientes(sql);
    
    

























%>