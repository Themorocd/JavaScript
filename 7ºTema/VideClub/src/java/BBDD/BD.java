/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package BBDD;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import modelo.categorias;
import modelo.pelicula;
import modelo.videoclub;


/**
 *
 * @author moro-
 */
public class BD {
    public static String usuario = "root";
    public static String password = "";
    public static String servidor = "localhost:3306";
    public static String basedatos = "sakila";

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
    
    
    public static ArrayList<categorias> compruebacategorias(String sql){
        
        Connection cnn = null;
        ArrayList<categorias> List = new ArrayList<categorias>();
        
        categorias cate = null;
        
        try {
            cnn = CrearConexion();
            
            PreparedStatement pst = cnn.prepareStatement(sql);
            ResultSet rs = pst.executeQuery();
            
            while (rs.next()) {                
                cate = new categorias(rs.getString(1),rs.getString(2));
                List.add(cate);
            }
            
        } catch (SQLException ex) {
            Logger.getLogger(BD.class.getName()).log(Level.SEVERE, null, ex);
        }
         
        
         return List;
        
    }
    public static ArrayList<videoclub> compruebavideoclubs(String sql){
        
        Connection cnn = null;
        ArrayList<videoclub> List = new ArrayList<videoclub>();
        
        videoclub vide = null;
        
        try {
            cnn = CrearConexion();
            
            PreparedStatement pst = cnn.prepareStatement(sql);
            ResultSet rs = pst.executeQuery();
            
            while (rs.next()) {                
                vide = new videoclub(rs.getString(1),rs.getString(2));
                List.add(vide);
            }
            
        } catch (SQLException ex) {
            Logger.getLogger(BD.class.getName()).log(Level.SEVERE, null, ex);
        }
         
        
         return List;
        
    }
    
      public static ArrayList<pelicula> consultapelis(String sql){
        
        Connection cnn = null;
        ArrayList<pelicula> List = new ArrayList<pelicula>();
        
        pelicula peli = null;
        
        try {
            cnn = CrearConexion();
            
            PreparedStatement pst = cnn.prepareStatement(sql);
            ResultSet rs = pst.executeQuery();
            
            while (rs.next()) {                
                peli = new pelicula(rs.getString(1),rs.getString(2));
                List.add(peli);
            }
            
        } catch (SQLException ex) {
            Logger.getLogger(BD.class.getName()).log(Level.SEVERE, null, ex);
        }
         
        
         return List;
        
    }
    
    
    
     
}
