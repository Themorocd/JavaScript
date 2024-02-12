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
import modelo.Discos;
import modelo.usuarios;

/**
 *
 * @author Andres
 */
public class BD {

    public static String usuario = "root";
    public static String password = "";
    public static String servidor = "localhost:3306";
    public static String basedatos = "casa-disco";

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
    
    
    
    
    
    public static ArrayList<usuarios> compruebauser(String sql) {
        
    
        Connection cnn = null;
        
        usuarios user = null;
        
        ArrayList<usuarios> List = new ArrayList<usuarios>();
        
        try {
            cnn = CrearConexion();
            
            PreparedStatement pst = cnn.prepareStatement(sql);
            ResultSet rs = pst.executeQuery();
            
            
            while (rs.next()) {                
                user = new usuarios(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5), rs.getString(6), rs.getString(7), rs.getString(8));
                List.add(user);
            
            
            }
            
            
        } catch (Exception e) {
        }
  
    
        return List;
    
    }
    
    
    public static ArrayList<Discos> consultadiscos(String sql){
        
        Connection cnn = null;
        
        Discos dis = null;
        
        ArrayList<Discos> List = new ArrayList<Discos>();
        
        try {
            cnn = CrearConexion();
            
            PreparedStatement pst = cnn.prepareStatement(sql);
            ResultSet rs = pst.executeQuery();
            
            while (rs.next()) {                
                dis = new Discos (rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getDouble(5), rs.getString(6));
                List.add(dis);
            }
            
            
        } catch (Exception e) {
        }

        return List;
        
    }

    public static Discos buscodisco(String sql, int cantidad) {
           
        
        Connection cnn = null;
        
        Discos disco = null;
        
        try {
            cnn = CrearConexion();
            
            PreparedStatement pst = cnn.prepareStatement(sql);
            ResultSet rs = pst.executeQuery();
            
            while (rs.next()) {                
                disco = new Discos(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getDouble(5), rs.getString(6), cantidad);
        
            }
        } catch (Exception e) {
        }

        
        return disco;
          

    
    }
    
    
}
