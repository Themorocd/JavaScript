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
 * @author moro-
 */
public class actualizar extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        HttpSession sesion = request.getSession();
        ArrayList<Discos> listacompra = (ArrayList<Discos>) sesion.getAttribute("listacompra");

        if (listacompra != null) {
            // Crear una lista temporal para almacenar elementos a eliminar
            ArrayList<Discos> elementosParaEliminar = new ArrayList<>();

            for (Discos elem : listacompra) {
                String cantidadStr = request.getParameter("id_" + elem.getIddisco());
                int cantidad = Integer.parseInt(cantidadStr);

                if (cantidad == 0) {
                    elementosParaEliminar.add(elem);
                } else {
                    elem.setCantdestacados(cantidad);
                }
            }

            // Eliminar los elementos almacenados en la lista temporal
            listacompra.removeAll(elementosParaEliminar);
        }

        sesion.setAttribute("listacompra", listacompra);
        getServletContext().getRequestDispatcher("/Cesta.jsp").forward(request, response);

    }

}
