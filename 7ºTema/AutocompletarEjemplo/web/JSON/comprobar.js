/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


window.onload = iniciar;

peticion = null

let texto;

let cachesugerencias = {}; // Agregué esta variable para almacenar las sugerencias en caché.

let sugerencias;

function iniciar() {
    //Creo div para mostrar sugerencias dadas por el servidor
    let sugerenciasDIV = document.createElement("div");
    //le doy una id
    sugerenciasDIV.id = "sugerencias";
    //coloco el div al final del body
    document.body.innerHTML += sugerenciasDIV.outerHTML;
    //llama a autocompletar al soltar la tecla
    document.getElementById("texto").addEventListener("keyup", autocompletar);
   
    //mantiene el foco en texto
    document.getElementById("texto").focus();
}

function autocompletar(event) {

    let tecla = event.keyCode;
    
    console.log(tecla);

    if (tecla == 40) {

        if (elementoseleccionado + 1 < sugerencias.length) {

            elementoseleccionado++;
        }
        mostrarsugerencias();

    } else if (tecla == 38) {

        if (elementoseleccionado > 0) {

            elementoseleccionado--;
        }
        mostrarsugerencias();

    } else if (tecla == 13) {

        alert("Aqui se produce un evento que creo que me muestra informacion sobre ese elemento");

    } else {
        texto = document.getElementById("texto").value;

        if (tecla == 8 && texto == "") {

            borrarlista();

            return;
        }


        if (cachesugerencias[texto] == null) {

            peticion = new XMLHttpRequest();

            borrarlista();

            peticion.onreadystatechange = procesarespuesta;

            peticion.open("POST", "autocompletar.jsp", true);

            peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            let query = creaquery();

            peticion.send(creaquery());

        } else {

            atualizarsugerencias();

        }
    }
}

function creaquery() {

    texto = document.getElementById("texto").value;

    return "texto=" + encodeURIComponent(texto) + "&nocache=" + Math.random();
}

function procesarespuesta() {

    if (peticion.readyState == 4 && peticion.status == 200) {

        let respuestaJSON = peticion.responseText;

        sugerencias = eval("(" + respuestaJSON + ")");

        if (sugerencias.length == 0) {
            sinresultados();
        } else {
            cachesugerencias[texto] = sugerencias;
            atualizarsugerencias();
        }
    }
}

function sinresultados() {

    document.getElementById("sugerencias").innerHTML = "No existe asignaturas que empiecen con ese texto";

    document.getElementById("sugerencias").style.display = "block";

}

function atualizarsugerencias() {

    elementoseleccionado = -1;

    mostrarsugerencias();
}

function mostrarsugerencias() {

    let zonasugerencias = document.getElementById("sugerencias");

    // Limpiar la lista de sugerencias
    zonasugerencias.innerHTML = "";

    // Utilizar la función formateaLista para generar la lista HTML
    let listaHTML = sugerencias.formateaLista(elementoseleccionado);

    // Agregar la lista HTML al div de sugerencias
    zonasugerencias.innerHTML = listaHTML;

    // Mostrar el div de sugerencias
    zonasugerencias.style.display = "block";

}

function borrarlista() {

    document.getElementById("sugerencias").innerHTML = "";

    document.getElementById("sugerencias").style.display = "none";

}


Array.prototype.formateaLista = function() {
    let codigohtml="";
    codigohtml="<ul>";
    for (let x = 0; x < this.length; x++) {
        if(x == elementoseleccionado){
            codigohtml+="<li class=\"seleccionado\">"+this[x]+"</li>";
        }else{
            codigohtml+="<li>"+this[x]+"</li>";
        }
    }
    codigohtml+="</ul>";
    return codigohtml;
}