window.onload = iniciar

function iniciar(){
    totalfilas = 0
    nodotabla = document.getElementById("tabla1");
    
    document.getElementById('botoneliminar').disabled = true;
    document.getElementById('botonaumentar').disabled = true;
    document.getElementById('botondisminuir').disabled = true;
    document.getElementById('botonleer').disabled = true;

    document.getElementById('botonagregar').addEventListener('click', agregar);
    document.getElementById('botoneliminar').addEventListener('click', eliminar);
    document.getElementById('botonleer').addEventListener('click', leerborde);
    document.getElementById('botonaumentar').addEventListener('click', aumentarborde);
    document.getElementById('botondisminuir').addEventListener('click', disminuirborde);

}

function agregar(){
    document.getElementById('botoneliminar').disabled = false;
    document.getElementById('botonaumentar').disabled = false;
    document.getElementById('botondisminuir').disabled = false;
    document.getElementById('botonleer').disabled = false;

    if(totalfilas<5){
        totalfilas+=1;
        nodofila = document.createElement("tr");
        nodotabla.appendChild(nodofila);
        for(celdas = 0;celdas <=2; celdas ++){
            nodoCelda = document.createElement("td");
            nodofila.appendChild(nodoCelda);
            valorTexto = document.createTextNode("Fila "+totalfilas+" Celda "+(celdas+1));
            nodoCelda.appendChild(valorTexto);
        }
    }

    if(totalfilas==5){
        document.getElementById('botonagregar').disabled = true;
    }

    if(totalfilas==1){
        document.getElementById('botoneliminar').disabled = false;
    }
}

function eliminar(){

    document.getElementById('botonagregar').disabled = false;

    if(totalfilas>1){
        nodotabla.removeChild(nodotabla.lastChild);
        totalfilas-=1;
    }

    if(totalfilas ==1){
        document.getElementById('botoneliminar').disabled = true;
    }
}

function leerborde(){

    alert("El borde de la tabla es "+nodotabla.border);


}

function aumentarborde(){

    if(parseInt(nodotabla.border) <20){
        nodotabla.border = parseInt(nodotabla.border)+1;
    }
    else{
        alert("Se ha superado el tamaño maximo permitido= "+parseInt(nodotabla.border));
    }

}

function disminuirborde(){
    if(nodotabla.border > 1){
        nodotabla.border -=1;
    }
}