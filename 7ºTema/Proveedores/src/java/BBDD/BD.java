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
import modelo.producto;
import modelo.proveedor;

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
    
    
    
    public static ArrayList<categorias> consultacategorias(String sql){
        
        Connection cnn = null;
        
        ArrayList<categorias> List = new ArrayList<categorias>();
        
        categorias cate;
        
        try {
            
            cnn = CrearConexion();
            
            PreparedStatement pst = cnn.prepareStatement(sql);
            ResultSet rs = pst.executeQuery();
            
            while (rs.next()) {                
                cate = new categorias(rs.getString(1),rs.getString(2),rs.getString(3));
                List.add(cate);
            }
          
            
        } catch (Exception e) {
        }
  
        return List;
        
    }
    
    
    
      public static ArrayList<producto> consultaproductos(String sql){
        
        Connection cnn = null;
        
        ArrayList<producto> List = new ArrayList<producto>();
        
        producto pro;
        
        try {
            
            cnn = CrearConexion();
            
            PreparedStatement pst = cnn.prepareStatement(sql);
            ResultSet rs = pst.executeQuery();
            
            while (rs.next()) {                
                pro = new producto(rs.getString(1),rs.getString(2),rs.getString(3),rs.getString(4));
                List.add(pro);
            }
          
            
        } catch (Exception e) {
        }
  
        return List;
        
    }
      
   public static ArrayList<proveedor> consultaproveedores(String sql){
        
        Connection cnn = null;
        
        ArrayList<proveedor> List = new ArrayList<proveedor>();
        
        proveedor prove;
        
        try {
            
            cnn = CrearConexion();
            
            PreparedStatement pst = cnn.prepareStatement(sql);
            ResultSet rs = pst.executeQuery();
            
            while (rs.next()) {                
                prove = new proveedor(rs.getString(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getString(6),rs.getString(7),rs.getString(8),rs.getString(9));
                List.add(prove);
            }
          
            
        } catch (Exception e) {
        }
  
        return List;
        
    }
}
