window.onload = iniciar;

let enlace_1 = true;
let enlace_2 = true;
let enlace_3 = true;

function iniciar(){

    document.getElementById("enlace_1").addEventListener("click",cambio);
    document.getElementById("enlace_2").addEventListener("click",cambio);
    document.getElementById("enlace_3").addEventListener("click",cambio);

}

function cambio(event){

    let objeto = event.target;
    let id = objeto.id;

    switch (id) {
        case "enlace_1":
            if(enlace_1){
                document.getElementById("contenidos_1").style.display="none";
                document.getElementById("enlace_1").innerHTML="Mostrar contenido";
                enlace_1 = false;
            }else{
                document.getElementById("contenidos_1").style.display="block";
                document.getElementById("enlace_1").innerHTML="Ocultar contenido";
                enlace_1 = true;
            }
            break;

        case "enlace_2":

        if(enlace_2){
            document.getElementById("contenidos_2").style.display="none";
            document.getElementById("enlace_2").innerHTML="Mostrar contenido";
            enlace_2 = false;
        }else{
            document.getElementById("contenidos_2").style.display="block";
            document.getElementById("enlace_2").innerHTML="Ocultar contenido";
            enlace_2 = true;
        }
        break;


        case "enlace_3":
        
        if(enlace_3){
            document.getElementById("contenidos_3").style.display="none";
            document.getElementById("enlace_3").innerHTML="Mostrar contenido";
            enlace_3 = false;
        }else{
            document.getElementById("contenidos_3").style.display="block";
            document.getElementById("enlace_3").innerHTML="Ocultar contenido";
            enlace_3 = true;
        }
        break;
    
    }

}