/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package controlador;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import modelo.Discos;

/**
 *
 * @author Andres
 */
public class agregarcesta extends HttpServlet {


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        
        HttpSession sesion = request.getSession();
        
        int iddisco = Integer.parseInt(request.getParameter("iddisco"));
        int cantidad = Integer.parseInt(request.getParameter("cantidad"));
        
        ArrayList<Discos> listacompra = (ArrayList<Discos>) sesion.getAttribute("listacompra");
        Discos disco ;
        
        String sql ="Select * from disco where Iddisco='"+iddisco+"'";
        
        if(listacompra == null){
            listacompra = new ArrayList<Discos>();
            disco = BBDD.BD.buscodisco(sql,cantidad);
            listacompra.add(disco);
        }else{
            disco = BBDD.BD.buscodisco(sql,cantidad);
            
            boolean discoexiste = false;
            
            for (Discos discos : listacompra) {
                if(discos.getIddisco() == iddisco){
                    int cantilista = discos.getCantdestacados();
                    cantilista +=cantidad;
                    discos.setCantdestacados(cantilista);
                    discoexiste = true;
                    break;
                }
                
                
                
            }
            if(!discoexiste){
                listacompra.add(disco);
            }
        }
        sesion.setAttribute("listacompra", listacompra);
        
        getServletContext().getRequestDispatcher("/confirmarañadidos.jsp").forward(request, response);
    
    }


}
