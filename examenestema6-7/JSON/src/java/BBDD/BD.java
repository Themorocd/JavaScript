/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package BBDD;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import modelo.categorias;

/**
 *
 * @author moro-
 */
public class BD {
     public static String usuario = "root";
    public static String password = "";
    public static String servidor = "localhost:3306";
    public static String basedatos = "neptuno";

    public static Connection CrearConexion() {
        Connection cnn = null;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            String url = "jdbc:mysql://" + servidor + "/" + basedatos;
            cnn = DriverManager.getConnection(url, usuario, password);
        } catch (ClassNotFoundException c) {
            System.out.println("Controlador JBDC no encontrado" + c.toString());

        } catch (Exception c) {
            System.out.println("Otra excepcion" + c.toString());
        }
        return cnn;
    }
    
    
    
    
    public static ArrayList<categorias> compruebocategorias(String sql){
         Connection cnn = null;
         
         categorias cate = null;
         
         ArrayList<categorias> List = new ArrayList<categorias>();
         
         try {
            
             cnn = CrearConexion();
             
             PreparedStatement pst = cnn.prepareStatement(sql);
             ResultSet rs = pst.executeQuery();
             
             while (rs.next()) {                 
                 
                 cate = new categorias(rs.getString(1),rs.getString(2));
                 List.add(cate);
                 
             }
             
             
             
        } catch (Exception e) {
        }
         
         return List;
        
    }
}
