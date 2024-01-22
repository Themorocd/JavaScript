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
    if (peticion.readyState == 4 && peticion.status == 200) {

        let respuesta_json = peticion.responseText;
        
         let obj_json = eval("("+respuesta_json+")");
        
        let confirmo = obj_json.disponible;

        if (confirmo === "si") {
            let contenidoHTML = "<h1>Productos disponibles de la categoria: " + catego + "</h1><table border='5'>"
                    + "<tr>"
                    + "<td>Producto</td>"
                    + "<td>Proveedor</td>";

            for (let i = 0; i < obj_json.productos.length; i++) {
                contenidoHTML += "<tr><td>" + obj_json.productos[i].nombreProducto + "</td><td>" + obj_json.productos[i].nombreProveedor + "</td></tr>";
            }
            contenidoHTML += "</tr></table>";


            document.getElementById("id").innerHTML = contenidoHTML;
        } else {
            document.getElementById("id").innerHTML = "<h1>No existe ningun producto disponible de la categoria: " + catego + "</h1>";
        }


    }
}


