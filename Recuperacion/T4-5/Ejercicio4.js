window.onload = iniciar;

function iniciar(){
    window.addEventListener("click",posicion);
}

function posicion(event){

    let x = event.pageX;
    let y = event.pageY;
    let tamanox = window.innerWidth;
    let tamanoy = window.innerHeight;

    if(x < tamanox / 2){
        document.getElementById("x").innerHTML = "izquierda";
    }else{
        document.getElementById("x").innerHTML ="derecha";
    }
    if(y < tamanoy / 2){
        document.getElementById("y").innerHTML = "arriba";
    }else{
        document.getElementById("y").innerHTML ="abajo";
    }
}


