<%-- 
    Document   : Cesta
    Created on : 12 feb. 2024, 12:46:38
    Author     : Andres
--%>

<%@page import="java.util.ArrayList"%>
<%@page import="modelo.Discos"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%

    String nombreUsuario = (String) session.getAttribute("nombre");
    String apellidoUsuario = (String) session.getAttribute("apellido");
    
    ArrayList<Discos> listacompra;
    listacompra = (ArrayList<Discos>) session.getAttribute("listacompra");
  
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
            <form action="actualizar" method="POST">
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
                <tr>
                    <td></td>
                    <td>Titulo</td>
                    <td>Cantdidad</td>
                    <td>Precio</td>
                </tr>
                <%
                
                double total=0;
                if(listacompra != null){
                for (Discos elem : listacompra) {
          
                %>
                <tr>
                    <td><img src="images/<%=elem.getPortada()%>.jpg"></td>
                    <td><%=elem.getTitulo()%></td>
                    <td>
                        <select name="id_<%=elem.getIddisco()%>">
                            <option hidden value="<%=elem.getCantdestacados()%>"> <%=elem.getCantdestacados()%></option>
                            <%
                            for (int x = 0; x <= 10; x++) {
                                    
                                
                            %>
                            <option value="<%=x%>"><%=x%></option>
                           <%}%>
                        </select>

                       
                    </td>
                    <%
                    
                        double can = elem.getCantdestacados();
                        double precio = (elem.getPrecio()) * (can);
                        total += precio;           
                    
                    %>
                    <td><%=precio%>€</td>
                    
                </tr>
                <%}%>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Total: <%=total%>€</td>
                </tr>
                <%}%>
                <%
                
                    session.setAttribute("total", total);
        
                
                %>
                <tr>
                    <td><input type="submit" value="Actualizar Pedido"></td>
                </tr>
                </form>
                <form action="enviodatos" method="POST">
                    <tr>
                        <td> <input type="submit" value="Tramitar pedido"/></td>
                    </tr>
            
            </tbody>
            
            </form>
        </table>

    </body>
</html>
<%}%>