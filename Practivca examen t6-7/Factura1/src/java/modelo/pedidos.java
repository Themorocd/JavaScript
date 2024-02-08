/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package modelo;

/**
 *
 * @author moro-
 */
public class pedidos {
    String idPedido,idCliente,idEmpleado,FechaPedido,FechaEntrega,FechaEnvio,FormaEnvio,Cargo,Destinatario,DireccionDestinatario,CiudadDestinatario,RegionDestinatario,codPostaldestinatario,PaisDestinatario;

    public pedidos(String idPedido, String idCliente, String idEmpleado, String FechaPedido, String FechaEntrega, String FechaEnvio, String FormaEnvio, String Cargo, String Destinatario, String DireccionDestinatario, String CiudadDestinatario, String RegionDestinatario, String codPostaldestinatario, String PaisDestinatario) {
        this.idPedido = idPedido;
        this.idCliente = idCliente;
        this.idEmpleado = idEmpleado;
        this.FechaPedido = FechaPedido;
        this.FechaEntrega = FechaEntrega;
        this.FechaEnvio = FechaEnvio;
        this.FormaEnvio = FormaEnvio;
        this.Cargo = Cargo;
        this.Destinatario = Destinatario;
        this.DireccionDestinatario = DireccionDestinatario;
        this.CiudadDestinatario = CiudadDestinatario;
        this.RegionDestinatario = RegionDestinatario;
        this.codPostaldestinatario = codPostaldestinatario;
        this.PaisDestinatario = PaisDestinatario;
    }

    public String getIdPedido() {
        return idPedido;
    }

    public void setIdPedido(String idPedido) {
        this.idPedido = idPedido;
    }

    public String getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(String idCliente) {
        this.idCliente = idCliente;
    }

    public String getIdEmpleado() {
        return idEmpleado;
    }

    public void setIdEmpleado(String idEmpleado) {
        this.idEmpleado = idEmpleado;
    }

    public String getFechaPedido() {
        return FechaPedido;
    }

    public void setFechaPedido(String FechaPedido) {
        this.FechaPedido = FechaPedido;
    }

    public String getFechaEntrega() {
        return FechaEntrega;
    }

    public void setFechaEntrega(String FechaEntrega) {
        this.FechaEntrega = FechaEntrega;
    }

    public String getFechaEnvio() {
        return FechaEnvio;
    }

    public void setFechaEnvio(String FechaEnvio) {
        this.FechaEnvio = FechaEnvio;
    }

    public String getFormaEnvio() {
        return FormaEnvio;
    }

    public void setFormaEnvio(String FormaEnvio) {
        this.FormaEnvio = FormaEnvio;
    }

    public String getCargo() {
        return Cargo;
    }

    public void setCargo(String Cargo) {
        this.Cargo = Cargo;
    }

    public String getDestinatario() {
        return Destinatario;
    }

    public void setDestinatario(String Destinatario) {
        this.Destinatario = Destinatario;
    }

    public String getDireccionDestinatario() {
        return DireccionDestinatario;
    }

    public void setDireccionDestinatario(String DireccionDestinatario) {
        this.DireccionDestinatario = DireccionDestinatario;
    }

    public String getCiudadDestinatario() {
        return CiudadDestinatario;
    }

    public void setCiudadDestinatario(String CiudadDestinatario) {
        this.CiudadDestinatario = CiudadDestinatario;
    }

    public String getRegionDestinatario() {
        return RegionDestinatario;
    }

    public void setRegionDestinatario(String RegionDestinatario) {
        this.RegionDestinatario = RegionDestinatario;
    }

    public String getCodPostaldestinatario() {
        return codPostaldestinatario;
    }

    public void setCodPostaldestinatario(String codPostaldestinatario) {
        this.codPostaldestinatario = codPostaldestinatario;
    }

    public String getPaisDestinatario() {
        return PaisDestinatario;
    }

    public void setPaisDestinatario(String PaisDestinatario) {
        this.PaisDestinatario = PaisDestinatario;
    }
    
 
}
