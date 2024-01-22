/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

window.onload = iniciar;

peticion = null;

function iniciar() {
    document.getElementById("todos").addEventListener("click", todos, true);
    document.getElementById("infantiles").addEventListener("click", infantiles, true);
    document.getElementById("adulto").addEventListener("click", adultos, true);
}

function todos() {

    peticion = new XMLHttpRequest();

    peticion.onreadystatechange = muestratodos;

    peticion.open("GET", "libros.xml", true);

    peticion.send(null);

}

function muestratodos() {

    if (peticion.readyState == 4 && peticion.status == 200) {

        let documento = this.responseXML;

        let infantil = documento.firstChild.children[0];
        let adultos = documento.firstChild.children[1];
        let tamañoInfantiles = infantil.childElementCount;
        let tamañoAdultos = adultos.childElementCount;
        document.getElementById("id").innerHTML = "---LIBROS INFANTILES---";
        document.getElementById("id").innerHTML += "<br/>";
        for (let x = 0; x < tamañoInfantiles; x++) {
            let libros = infantil.children[x];
            let titulo = libros.firstChild.nodeValue;
            muestraHTML('id', titulo + "<br/>");
        }
        document.getElementById("id").innerHTML += "<br/>";
        document.getElementById("id").innerHTML += "---LIBROS ADULTOS---";
        document.getElementById("id").innerHTML += "<br/>";
        for (let x = 0; x < tamañoAdultos; x++) {
            let libros = adultos.children[x];
            let titulo = libros.firstChild.nodeValue;
            muestraHTML('id', titulo + "<br/>");
        }
    }
}

function infantiles(){
     peticion = new XMLHttpRequest();

    peticion.onreadystatechange = muestrainfantiles;

    peticion.open("GET", "libros.xml", true);

    peticion.send(null);
}

function muestrainfantiles(){
    if (peticion.readyState == 4 && peticion.status == 200) {

        let documento = this.responseXML;

        let infantil = documento.firstChild.children[0];
        
        let tamañoInfantiles = infantil.childElementCount;
        
        document.getElementById("id").innerHTML = "---LIBROS INFANTILES---";
        document.getElementById("id").innerHTML += "<br/>";
        for (let x = 0; x < tamañoInfantiles; x++) {
            let libros = infantil.children[x];
            let titulo = libros.firstChild.nodeValue;
            muestraHTML('id', titulo + "<br/>");
        }
        
    }
}



function adultos(){
    peticion = new XMLHttpRequest();

    peticion.onreadystatechange = muestraadultos;

    peticion.open("GET", "libros.xml", true);

    peticion.send(null);
}

function muestraadultos(){
    if (peticion.readyState == 4 && peticion.status == 200) {

        let documento = this.responseXML;

        
        let adultos = documento.firstChild.children[1];
        
        let tamañoAdultos = adultos.childElementCount;
        
        
        document.getElementById("id").innerHTML = "---LIBROS ADULTOS---";
        document.getElementById("id").innerHTML += "<br/>";
        for (let x = 0; x < tamañoAdultos; x++) {
            let libros = adultos.children[x];
            let titulo = libros.firstChild.nodeValue;
            muestraHTML('id', titulo + "<br/>");
        }
    }
}

function muestraHTML(id,texto){
    if(document.getElementById){
        document.getElementById(id).innerHTML +=texto;
    }
}

