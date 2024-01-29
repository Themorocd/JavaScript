/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


window.onload = iniciar;

peticion = null;

let categoria;
let videoclub;
let peliculas;
let campovacio=1;

function iniciar() {

    peticion = new XMLHttpRequest();

    peticion.onreadystatechange = procesarespuestacategoria;

    peticion.open("POST", "categorias.jsp", true);

    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    let query = creaquery();

    peticion.send(creaquery());


}

function creaquery() {

    categoria = document.getElementById("categoria").value;

    return "categoria=" + encodeURIComponent(categoria) + "&nocache=" + Math.random();


}

function procesarespuestacategoria() {


    if (peticion.readyState == 4 && peticion.status == 200) {

        let codigo = peticion.responseXML.getElementsByTagName("codigo");
        let nombre = peticion.responseXML.getElementsByTagName("nombre");
        let listacategorias = document.getElementById("categoria");
        let contenidoHTML = "";

        if (codigo.length > 0) {

            for (let x = 0; x < codigo.length; x++) {
                contenidoHTML += "<option value=\"" + codigo[x].textContent + "\">" + nombre[x].textContent + "</option>";
            }
            listacategorias.innerHTML = contenidoHTML;
            if(listacategorias.value !== ""){
                cargaVideoclubs();
            }

        } else {
            listacategorias.innerHTML = "<opcion value=" + campovacio + ">" + campovacio + "</opcion>";

        }

    }
}

function cargaVideoclubs(){
    peticion = new XMLHttpRequest();

    peticion.onreadystatechange = procesarespuestavideoclub;

    peticion.open("POST", "videoclub.jsp", true);

    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    let query = creaqueryvideo();

    peticion.send(creaqueryvideo());
}

function creaqueryvideo(){
    categoria = document.getElementById("categoria").value;
    videoclub = document.getElementById("tienda").value;

    return "categoria="+encodeURIComponent(categoria)+"&videoclub=" + encodeURIComponent(videoclub) + "&nocache=" + Math.random();

}

function procesarespuestavideoclub(){
    
    if (peticion.readyState == 4 && peticion.status == 200) {

        let codigo = peticion.responseXML.getElementsByTagName("codigo");
        let nombre = peticion.responseXML.getElementsByTagName("nombre");
        let listatienda = document.getElementById("tienda");
        let contenidoHTML = "";

        if (codigo.length > 0) {

            for (let x = 0; x < codigo.length; x++) {
                contenidoHTML += "<option value=\"" + codigo[x].textContent + "\">" + nombre[x].textContent + "</option>";
            }
            listatienda.innerHTML = contenidoHTML;
            if(listatienda !==""){
                document.getElementById("Aceptar").addEventListener("click",cargapeliculas,true);
    
            }
            

        } else {
            listatienda.innerHTML = "<opcion value=" + campovacio + ">" + campovacio + "</opcion>";

        }

    }   
 
}

function cargapeliculas(){
    
    peticion = new XMLHttpRequest();

    peticion.onreadystatechange = procesarespuestapelis;

    peticion.open("POST", "peliculas.jsp", true);

    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    let query = creaquerypelis();

    peticion.send(creaquerypelis());
       
}

function creaquerypelis(){
    categoria = document.getElementById("categoria").value;
    videoclub = document.getElementById("tienda").value;
    //peliculas = document.getElementById("id").value;
    
    return "categoria="+encodeURIComponent(categoria)+"&videoclub=" + encodeURIComponent(videoclub) + "&nocache=" + Math.random();
    
}

function procesarespuestapelis(){
    if (peticion.readyState == 4 && peticion.status == 200) {

        let pelicula = peticion.responseXML.getElementsByTagName("pelicula");
        
        let listapelis = document.getElementById("peliculas");
        

        if (pelicula.length > 0) {
        let contenidoHTML = "<h1>Peliculas disponibles </h1><table border='5'"
        +"<tr>"
        +"<td>Pelicula</td>";
        

            for (let x = 0; x < pelicula.length; x++) {
                contenidoHTML +="<tr><td>"+pelicula[x].textContent+"</td></tr>";
            }
            contenidoHTML +="</tr></table>";
            listapelis.innerHTML = contenidoHTML;
            
            

        } else {
            listapelis.innerHTML = "<h1>No existe ninguna pelicula</h1>";

        }

    }   
}