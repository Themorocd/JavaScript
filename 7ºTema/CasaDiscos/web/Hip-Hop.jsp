<%-- 
    Document   : Hip-Hop
    Created on : 12 feb. 2024, 12:46:02
    Author     : Andres
--%>

<%@page import="java.util.ArrayList"%>
<%@page import="modelo.Discos"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%

       String nombreUsuario = (String) session.getAttribute("nombre");
    String apellidoUsuario = (String) session.getAttribute("apellido");
    
    if(nombreUsuario == null && apellidoUsuario == null){
    
        RequestDispatcher rd;
        ServletContext contexto = getServletContext();
        rd = contexto.getRequestDispatcher("/index.html");
        rd.forward(request, response);
        
    
    
    }else{

%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <table border="5" align="center">
            <form action="agregarcesta" method="POST">
            <thead>
                <tr>
                    <th>Casa disco</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Bienvenid@ ${nombre} ${apellido}<br><bt>Ha accedido a nuestra zona de pedidos a las ${hora} del ${fecha}</td>
                    
                </tr>
                <tr>
                    <td><a href="Clasica.jsp">Clasica</a></td>
                    <td><a href="Hip-Hop.jsp">Hip-Hop</a></td>
                    <td><a href="Jazz.jsp">Jazz</a></td>
                    <td><a href="POP-ROCK.jsp">POP-ROCK</a></td>
                    <td><a href="Cesta.jsp">Cesta</a></td>
                    
                </tr>
                <%
                
                String sql ="Select * from disco where idcategoria ='2'";
                ArrayList<Discos> Listahiphop = BBDD.BD.consultadiscos(sql);
          
                %>
                <tr>
                    <td>Libros destacados de este mes</td>
                    <%
                    
                    for (Discos elem : Listahiphop) {
                  
                    
                    %>
                    <td><img src="images/<%=elem.getPortada()%>.jpg"></td>
                    <%}%>
                </tr>
                <tr>
                    <td><select name="iddisco" id="iddisco">
                            <%
                            
                            for (Discos elem : Listahiphop) {
                      
                            %>
                            <option value="<%=elem.getIddisco()%>"><%=elem.getTitulo()%></option>
                            <%}%>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Cantidad</td>
                </tr>
                <tr>
                    <td><select name="cantidad" id="cantidad">
                            <%
                            
                            for (int x = 1; x < 10; x++) {                       
                            
                            %>
                            <option value="<%=x%>"><%=x%></option>
                            <%}%>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td><input type="submit" value="Añadir a la cesta"></td>
                </tr>
            </tbody>
            </form>
        </table>

    </body>
</html>
<%}%>