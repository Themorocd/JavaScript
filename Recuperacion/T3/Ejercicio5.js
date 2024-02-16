window.onload = iniciar;

function iniciar(){

    let cadena = prompt("Introduce una cadena de texto para ver si es palindroma");
    cadena = cadena.replaceAll(" ","").toLowerCase();
    let cadenainversa = cadena.split("").reverse().join("");
    if (cadena == cadenainversa){
        alert("La cadena es un palindromo");
    }else{
        alert("La cadena no es un palindromo");
    }




}