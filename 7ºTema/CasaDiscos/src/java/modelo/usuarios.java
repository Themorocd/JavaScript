/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package modelo;

/**
 *
 * @author Andres
 */
public class usuarios {
     String id,User_name,User_password,User_address,User_email,User_phone,Nombre,Apellidos;

    public usuarios(String id, String User_name, String User_password, String User_address, String User_email, String User_phone, String Nombre, String Apellidos) {
        this.id = id;
        this.User_name = User_name;
        this.User_password = User_password;
        this.User_address = User_address;
        this.User_email = User_email;
        this.User_phone = User_phone;
        this.Nombre = Nombre;
        this.Apellidos = Apellidos;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUser_name() {
        return User_name;
    }

    public void setUser_name(String User_name) {
        this.User_name = User_name;
    }

    public String getUser_password() {
        return User_password;
    }

    public void setUser_password(String User_password) {
        this.User_password = User_password;
    }

    public String getUser_address() {
        return User_address;
    }

    public void setUser_address(String User_address) {
        this.User_address = User_address;
    }

    public String getUser_email() {
        return User_email;
    }

    public void setUser_email(String User_email) {
        this.User_email = User_email;
    }

    public String getUser_phone() {
        return User_phone;
    }

    public void setUser_phone(String User_phone) {
        this.User_phone = User_phone;
    }

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String Nombre) {
        this.Nombre = Nombre;
    }

    public String getApellidos() {
        return Apellidos;
    }

    public void setApellidos(String Apellidos) {
        this.Apellidos = Apellidos;
    }

}
