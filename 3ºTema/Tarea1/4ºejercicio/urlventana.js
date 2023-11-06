
function inicializar(){

nuevaVentana = window.open("","", "width=500px,heigth=500px");

}



function abrirventana(){
    url = document.getElementById("URL").value;

    console.log(url);

    nuevaVentana.location.replace(url);
}