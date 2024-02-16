window.onload = iniciar;

function iniciar(){

    document.getElementById("genera").addEventListener("click",genera);
    document.getElementById("factorial").addEventListener("click",factorial);
    document.getElementById("primo").addEventListener("click",primo);
    document.getElementById("division").addEventListener("click",division);



}

let caja1 = document.getElementById("primero");
let caja2 = document.getElementById("segundo");

let cajafactorial = document.getElementById("resultado1");
let cajaprimo = document.getElementById("resultado2");
let cajadivision = document.getElementById("resultado3");

function genera(){
    eliminarelemento("pf");
    eliminarelemento("pp");
    eliminarelemento("pd");

    if(document.getElementById("p1") == null){
        creanumeroaleatorio();
    }else{
        eliminarelemento("p1");
        eliminarelemento("p2");
        creanumeroaleatorio();
    }


}

function factorial(){
    eliminarelemento("pf");

    let n1 = parseInt(document.getElementById("p1").innerHTML);
    let n2 = parseInt(document.getElementById("p2").innerHTML);

    let mayor = n1 > n2 ? n1 : n2;

    let fin = 1;

    for(let x = 1; x<=mayor; x++){
        fin *=x;
    }

    crearesultado("pf",fin,cajafactorial);
   
}

function primo(){

    eliminarelemento("pp");

    let n1 = parseInt(document.getElementById("p1").innerHTML);
    let n2 = parseInt(document.getElementById("p2").innerHTML);

    let menor = n1 < n2 ? n1 : n2;

    let esprimo = true;

    if(menor <= 1){
        esprimo = false;

    }else{
        for(let x = 2; x <=Math.sqrt(menor); x++){
            if(menor % x ===0){
                esprimo = false;
                break;
            }
        }
    }

    crearesultado("pp",esprimo ? "SI" : "NO",cajaprimo);

}

function division(){
    eliminarelemento("pd");

    let n1 = parseInt(document.getElementById("p1").innerHTML);
    let n2 = parseInt(document.getElementById("p2").innerHTML);

    let result;

    if(n1 === 0 || n2 ===0){
        result="No es posible dividir por 0";
    }else{
        result = n1 > n2 ? n1 / n2 : n2/ n1;
        result = result.toFixed(2);
    }
    crearesultado("pd",result,cajadivision);
}


function eliminarelemento(elementoid){
    let elemento = document.getElementById(elementoid);
    if(elemento != null){
        elemento.parentNode.removeChild(elemento);
    }
}

function creanumeroaleatorio(){
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");

    p1.id = "p1";
    p2.id = "p2";


    p1.innerHTML = Math.floor(Math.random()*(0-10)+10);
    p2.innerHTML = Math.floor(Math.random()*(0-10)+10);

    caja1.appendChild(p1);
    caja2.appendChild(p2);

}

function crearesultado(id,resultado,contenedor){
    let elemento = document.createElement("p");
    elemento.id = id;
    elemento.innerHTML = resultado;
    contenedor.appendChild(elemento);
}