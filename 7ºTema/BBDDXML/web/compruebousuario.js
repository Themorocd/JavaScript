window.onload = iniciar;
let peticion = null;
function iniciar() {

    document.getElementById("comprobar").addEventListener("click", valida, true);

}


function valida() {
    peticion = new XMLHttpRequest();
    peticion.onreadystatechange = procesarespuesta;
    peticion.open("POST", "compruebousuario.jsp", true);
    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    let query = crearQuery();
    peticion.send(query);
}

function crearQuery() {
    let usuario = document.getElementById("name").value;
    alert(usuario);
    return "usuario=" + encodeURIComponent(usuario) + "&nocache=" + Math.random();
}

function procesarespuesta() {
    if (peticion.readyState == 4 && peticion.status == 200) {
        document.getElementById("id").innerHTML = peticion.responseText;
    }
}