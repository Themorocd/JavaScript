/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package modelo;

/**
 *
 * @author moro-
 */
public class municipio {
    String cod,codprov,nombre;

    public municipio(String cod, String codprov, String nombre) {
        this.cod = cod;
        this.codprov = codprov;
        this.nombre = nombre;
    }

    public String getCod() {
        return cod;
    }

    public void setCod(String cod) {
        this.cod = cod;
    }

    public String getCodprov() {
        return codprov;
    }

    public void setCodprov(String codprov) {
        this.codprov = codprov;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    
}
