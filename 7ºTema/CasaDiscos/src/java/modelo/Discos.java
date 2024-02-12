/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package modelo;

/**
 *
 * @author Andres
 */
public class Discos {
    
    String idcategoria,titulo,autor,portada;
    int cantdestacados,iddisco;
    double precio;

    public Discos(int iddisco, String idcategoria, String titulo, String autor , double precio, String portada) {
        this.iddisco = iddisco;
        this.idcategoria = idcategoria;
        this.titulo = titulo;
        this.autor = autor;
        this.precio = precio;
        this.portada = portada;
        
       
        
    }

      public Discos(int iddisco, String idcategoria, String titulo, String autor , double precio, String portada,int cantdestacados) {
        this.iddisco = iddisco;
        this.idcategoria = idcategoria;
        this.titulo = titulo;
        this.autor = autor;
        this.precio = precio;
        this.portada = portada;
        this.cantdestacados = cantdestacados;
       
        
    }

    public String getIdcategoria() {
        return idcategoria;
    }

    public void setIdcategoria(String idcategoria) {
        this.idcategoria = idcategoria;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public String getPortada() {
        return portada;
    }

    public void setPortada(String portada) {
        this.portada = portada;
    }

    public int getCantdestacados() {
        return cantdestacados;
    }

    public void setCantdestacados(int cantdestacados) {
        this.cantdestacados = cantdestacados;
    }

    public int getIddisco() {
        return iddisco;
    }

    public void setIddisco(int iddisco) {
        this.iddisco = iddisco;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    

}
