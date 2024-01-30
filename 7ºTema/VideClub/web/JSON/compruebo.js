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
    
    // Agregar evento al cambio de categoría
    document.getElementById("categoria").addEventListener("change", cargaVideoclubs);
    
    //document.getElementById("tienda").addEventListener("change", cargaVideoclubs);//si pongo esto al se me resetea siempre videoclub y no se fija

    


}

function creaquery() {

    categoria = document.getElementById("categoria").value;

    return "categoria=" + encodeURIComponent(categoria) + "&nocache=" + Math.random();


}

function procesarespuestacategoria() {


    if (peticion.readyState == 4 && peticion.status == 200) {
        
           let JSON = peticion.responseText;
           let objson = eval("("+JSON+")");
        
        let confirmo = objson.length - 1;
        let listacategorias = document.getElementById("categoria");
        let contenidoHTML = "";
        
        if(confirmo > 0){           
            contenidoHTML += "<option value=cargando>Cargando...</option>";
            for (let x = 0; x < objson.length; x++) {
                
                contenidoHTML += "<option value=\"" + objson[x].codigoCategoria + "\">" + objson[x].nombreCategoria + "</option>";
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
    
    
    document.getElementById("peliculas").innerHTML="";
    
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
        
        let JSON = peticion.responseText;
        let objson = eval("("+JSON+")");
        
        let confirmo = objson.length - 1;
        
        
        
        let listatienda = document.getElementById("tienda");
        let contenidoHTML = "";

        if (confirmo > 0) {

            for (let x = 0; x < objson.length; x++) {
                contenidoHTML += "<option value=\"" + objson[x].codigoVideoclub + "\">" + objson[x].nombreVideoclub + "</option>";
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
    
     document.getElementById("peliculas").innerHTML = "";
    
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
        
        let JSON = peticion.responseText;
        let objson = eval("("+JSON+")");
        
        let confirmo = objson.length - 1;
  
        
        let listapelis = document.getElementById("peliculas");
        

        if (confirmo > 0) {
        let contenidoHTML = "<h1>Peliculas disponibles </h1><table border='5'"
        +"<tr>"
        +"<td>Pelicula</td>";
        

            for (let x = 0; x < objson.length; x++) {
                contenidoHTML +="<tr><td>"+objson[x].nombrePelicula+"</td></tr>";
            }
            contenidoHTML +="</tr></table>";
            listapelis.innerHTML = contenidoHTML;
            
            

        } else {
            listapelis.innerHTML = "<h1>No existe ninguna pelicula</h1>";

        }

    }   
}