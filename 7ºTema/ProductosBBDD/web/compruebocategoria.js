/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

window.onload = iniciar;

let peticion = null;

let catego;
function iniciar() {

    document.getElementById("comprobar").addEventListener("click", validar, true);

}

function validar() {

    peticion = new XMLHttpRequest();

    peticion.onreadystatechange = procesorespuesta;

    peticion.open("POST", "categoria.jsp", true);

    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    let query = crearQuery();

    peticion.send(query);
}

function crearQuery() {

    catego = document.getElementById("name").value;

    return "catego=" + encodeURIComponent(catego) + "&nocache=" + Math.random();


}

function procesorespuesta() {
//IMPORTANTE: HACER ESTO SINO NO FUNCIONA
    if (peticion.readyState == 4 && peticion.status == 200) {
        //Miro en mi jsp el formato que tiene y pillo los nombre de los tagname
        let productos = peticion.responseXML.getElementsByTagName("nombreProducto");
        let proveedores = peticion.responseXML.getElementsByTagName("nombreContacto");
        if (productos.length > 0) {//si producto no es 0 me pinta lo siguiente
            let contenidoHTML = "<h1>Productos disponibles de la categoria: " + catego + "</h1><table border='5'>"
                    + "<tr>"
                    + "<td>Producto</td>"
                    + "<td>Proveedor</td>";

            for (let i = 0; i < productos.length; i++) {//recorro productos para formatearlo

                contenidoHTML += "<tr><td>" + productos[i].textContent + "</td><td>" + proveedores[i].textContent + "</td></tr>";
            }
            contenidoHTML += "</tr></table>";

            document.getElementById("id").innerHTML = contenidoHTML;//lo pinto 
        } else {//Si el producto es 0 directamente pinto lo siguiente
            document.getElementById("id").innerHTML = "<h1>No existe ningun producto disponible de la categoria: " + catego + "</h1>";
        }
    }


}