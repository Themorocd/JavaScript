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
import modelo.municipio;
import modelo.provincias;

/**
 *
 * @author moro-
 */
public class BD {
    public static String usuario = "root";
    public static String password = "";
    public static String servidor = "localhost:3306";
    public static String basedatos = "andalucia";

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
    
    
    
    public static ArrayList<provincias> consultaprovincias(String sql){
        
        Connection cnn = null;
        
        provincias pro = null;
        
        ArrayList<provincias> List = new ArrayList<provincias>();
        
        try {
            cnn = CrearConexion();
            
            PreparedStatement pst = cnn.prepareStatement(sql);
            ResultSet rs = pst.executeQuery();
            
            
            while (rs.next()) {                
                pro = new provincias(rs.getString(1),rs.getString(2));
                List.add(pro);
            }
        } catch (Exception e) {
        }
        
        return List; 
        
    }
    
        public static ArrayList<municipio> consultamunicipio(String sql){
        
        Connection cnn = null;
        
        municipio muni = null;
        
        ArrayList<municipio> List = new ArrayList<municipio>();
        
        try {
            cnn = CrearConexion();
            
            PreparedStatement pst = cnn.prepareStatement(sql);
            ResultSet rs = pst.executeQuery();
            
            
            while (rs.next()) {                
                muni = new municipio(rs.getString(1),rs.getString(2),rs.getString(3));
                List.add(muni);
            }
        } catch (Exception e) {
        }
        
        return List; 
        
    }
    
    
    
    
    
    
}
