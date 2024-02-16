/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package controlador;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import modelo.Discos;
import modelo.usuarios;

/**
 *
 * @author moro-
 */
public class enviodatos extends HttpServlet {

  
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       
        HttpSession sesion = request.getSession();
        
        String nombreUsuario =(String) sesion.getAttribute("nombre");
        double total = (double) sesion.getAttribute("total");
        
        ArrayList<Discos> listacompra;
        
        listacompra =(ArrayList<Discos>) sesion.getAttribute("listacompra");
        
        String sql = "Select * from usuarios where Nombre ='"+nombreUsuario+"'";
        
        ArrayList<usuarios> List = BBDD.BD.compruebauser(sql);
        
        int id = 0;
        
        for (usuarios elem : List) {
            id = Integer.parseInt(elem.getId());
        }
        
        SimpleDateFormat dft = new SimpleDateFormat("yyyy/MM/dd");
        Calendar calendar = Calendar.getInstance();
        Date dateojb = calendar.getTime();
        String formateodate = dft.format(dateojb);
        
        
        String sql1 = "INSERT INTO pedidos (idUser,fechaPedido) values ('"+id+"', '"+formateodate+"')";
        
        BBDD.BD.altapedido(sql1);
        
        String sql2 = "Select Max(idPedido) from pedidos";
        
        int idpedido = BBDD.BD.consultaidpedido(sql2);
        
        int iddisco = 0;
        int cantidad = 0;
        double preciounidad = 0;
        
        for (Discos elem : listacompra) {
            
            iddisco = elem.getIddisco();
            cantidad = elem.getCantdestacados();
            preciounidad = elem.getPrecio();
            BBDD.BD.altadetallespedidos(idpedido,iddisco,cantidad,preciounidad);
            
        }
        listacompra.clear();
        sesion.invalidate();
        getServletContext().getRequestDispatcher("/confirmocompra.jsp").forward(request, response);
        
    }

 

}
