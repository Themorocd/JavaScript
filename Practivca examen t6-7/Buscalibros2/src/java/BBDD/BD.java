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
import modelo.Libro;

/**
 *
 * @author moro-
 */
public class BD {
     
    public static String usuario = "root";
    public static String password = "";
    public static String servidor = "localhost:3306";
    public static String basedatos = "books";

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
    
    
    public static ArrayList<Libro> consultalibros(String sql){
        
        Connection cnn = null;
        
        ArrayList<Libro> List = new ArrayList<Libro>();
        
        Libro libro = null;
        
        try {
            
            cnn = CrearConexion();
            
            PreparedStatement pst = cnn.prepareStatement(sql);
            ResultSet rs = pst.executeQuery();
            
            
            while (rs.next()) {                
                libro = new Libro(rs.getString(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getString(6));
                List.add(libro);
            }
            
            
        } catch (Exception e) {
        }
        
    
        
        return List;
        
    }
    
    
    public static ArrayList<Libro> buscoinfolibro(String sql){
        
        Connection cnn = null;
        
        ArrayList<Libro> List = new ArrayList<Libro>();
        
        Libro libro = null;
        
        try {
            
            cnn = CrearConexion();
            
            PreparedStatement pst = cnn.prepareStatement(sql);
            ResultSet rs = pst.executeQuery();
            
            
            while (rs.next()) {                
                libro = new Libro(rs.getString(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getString(6));
                List.add(libro);
            }
            
            
        } catch (Exception e) {
        }
        
    
        
        return List;
        
    }
    
    
    
    
}
