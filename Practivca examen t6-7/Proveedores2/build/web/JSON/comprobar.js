/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

window.onload = iniciar;

peticion = null;

let categoria;

let producto;

function iniciar() {

    peticion = new XMLHttpRequest();

    peticion.onreadystatechange = procesarespuesta;


    peticion.open("POST", "categoria.jsp", true);

    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    let query = creaquerycategoria();

    peticion.send(creaquerycategoria());

    document.getElementById("categoria").addEventListener("change", cargaproducto);



}

function creaquerycategoria() {

    categoria = document.getElementById("categoria").value;

    return "categoria=" + encodeURIComponent(categoria) + "&nocache=" + Math.random();

}

function procesarespuesta() {

    if (peticion.readyState == 4 && peticion.status == 200) {
        
        let respuestaJSON = peticion.responseText;
        
        let OBJSON = eval("("+respuestaJSON+")");
        
        let confirmar = OBJSON.length;
        
        let listacategoria = document.getElementById("categoria");

        let contenidoHTML = "";

        if (confirmar > 0) {

            contenidoHTML += "<option value=selecciona>-Selecciona-</option>";

            for (let x = 0; x < OBJSON.length; x++) {
                contenidoHTML += "<option value=\"" + OBJSON[x].codigocategoria + "\">" + OBJSON[x].nombrecategoria + "</option>";

            }

            listacategoria.innerHTML = contenidoHTML;
            if (listacategoria.value !== "") {
                cargaproducto();
            }

        } else {
            listacategoria.innerHTML = "<option value=vacio>-vacio-</option>";

        }
        document.getElementById("producto").addEventListener("change", reseteodatosproveedor);

    }

}

function cargaproducto() {

    document.getElementById("id").innerHTML = "";

    peticion = new XMLHttpRequest();

    peticion.onreadystatechange = procesarespuestaproductos;


    peticion.open("POST", "producto.jsp", true);

    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    let query = creaqueryproducto();

    peticion.send(creaqueryproducto());

}

function creaqueryproducto() {
    categoria = document.getElementById("categoria").value;

    producto = document.getElementById("producto").value;

    return "categoria=" + encodeURIComponent(categoria) + "&producto=" + encodeURIComponent(producto) + "&nocache=" + Math.random();

}


function procesarespuestaproductos() {
    if (peticion.readyState == 4 && peticion.status == 200) {
        

        let respuestaJSON = peticion.responseText;
        
        let OBJSON = eval("("+respuestaJSON+")");
        
        let confirmar = OBJSON.length;
        
        let listaproducto = document.getElementById("producto");

        let contenidoHTML = "";

        if (confirmar > 0) {

            contenidoHTML += "<option value=selecciona>-Selecciona-</option>";

            for (let x = 0; x < OBJSON.length; x++) {
                contenidoHTML += "<option value=\"" + OBJSON[x].codigoproducto + "\">" + OBJSON[x].nombreproducto + "</option>";

            }

            listaproducto.innerHTML = contenidoHTML;
            if (listaproducto.value !== "") {
                document.getElementById("boton").addEventListener("click", cargaproveedor, true);
            }

        } else {
            listaproducto.innerHTML = "<option value=vacio>-vacio-</option>";

        }

    }
}

function reseteodatosproveedor() {
    document.getElementById("id").innerHTML = "";
}


function cargaproveedor() {

    document.getElementById("id").innerHTML = "";

    peticion = new XMLHttpRequest();

    peticion.onreadystatechange = procesarespuestaproveedor;


    peticion.open("POST", "proveedor.jsp", true);

    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    let query = creaqueryproveedor();

    peticion.send(creaqueryproveedor());
}


function creaqueryproveedor() {

    categoria = document.getElementById("categoria").value;

    producto = document.getElementById("producto").value;

    return "categoria=" + encodeURIComponent(categoria) + "&producto=" + encodeURIComponent(producto) + "&nocache=" + Math.random();

}

function procesarespuestaproveedor() {
    if (peticion.readyState == 4 && peticion.status == 200) {       
        
        let respuestaJSON = peticion.responseText;
        
        let OBJSON  = eval("("+respuestaJSON+")");
        
        let comprobar = OBJSON.length;
 
        
        let listaproveedor = document.getElementById("id");
        let contenidoHTML = "";

        if (comprobar > 0) {

            contenidoHTML +="<h1>Datos del proveedor</h1><table border='5'"
        +"<tr>"
        +"<td>Compañia</td>"
        +"<td>contacto</td>"
        +"<td>cargo</td>"
        +"<td>direccion</td>"
        +"<td>ciudad</td>"
        +"<td>cp</td>"
        +"<td>pais</td>"
        +"<td>telefono</td>";

            for (let x = 0; x < OBJSON.length; x++) {
                contenidoHTML +="<tr><td>"+OBJSON[x].compañia+"<td>"+OBJSON[x].contacto+"<td>"+OBJSON[x].cargo+"<td>"+OBJSON[x].direccion+"<td>"+OBJSON[x].ciudad+"<td>"+OBJSON[x].cp+"<td>"+OBJSON[x].pais+"<td>"+OBJSON[x].telefono+"</td></tr>";
            
            }
             contenidoHTML +="</tr></table>";
            listaproveedor.innerHTML = contenidoHTML;
            

        } else {
            listaproveedor.innerHTML = "No existe ningun proveedor";

        }

    }
}
