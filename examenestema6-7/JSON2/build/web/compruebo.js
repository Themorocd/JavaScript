/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


window.onload = iniciar;

peticion = null;

let campo;

function iniciar() {

    document.getElementById("comprobar").addEventListener("click", validar, true);

}


function validar() {

    peticion = new XMLHttpRequest();

    peticion.onreadystatechange = procesarespuesta;

    peticion.open("POST", "categoria.jsp", true);

    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    let query = CreaQuery();

    peticion.send(query);


}

function CreaQuery() {

    campo = document.getElementById("name").value;

    return "campo=" + encodeURIComponent(campo) + "&nocache=" + Math.random();



}

function procesarespuesta() {


    if (peticion.readyState == 4 && peticion.status == 200) {

        let json = peticion.responseText;

        let Obj_json = eval("(" + json + ")");

        let confirmar = Obj_json.length - 1;

        if (confirmar > 0) {

            let contieneHTML = "<h1>Productos disponibles de la categoria: " + campo + "</h1><table border ='5'>"
                    + "<tr>"
                    + "<td>Productos</td>"
                    + "<td>Proveedores</td>";

            for (let i = 0; i < Obj_json.length; i++) {
                contieneHTML += "<tr><td>" + Obj_json[i].producto + "<td>" + Obj_json[i].proveedor + "</td></tr>";
            }
            contieneHTML += "</tr></table>";

            document.getElementById("id").innerHTML = contieneHTML;



        } else {
            contieneHTML = "<h1>No existe ningun producto disponible de la categoria : " + campo + "</h1>";
            document.getElementById("id").innerHTML = contieneHTML;
        }

    }
    }
    