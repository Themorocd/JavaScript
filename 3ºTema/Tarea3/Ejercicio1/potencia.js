

    let base = parseInt(prompt("Introduce una base"));
    let expo = parseInt(prompt("Introduce el exponente"));

    if(isNaN(base)){
        alert("no es un numero");
    }
    if(isNaN(expo)){
        alert("No es un numero");
    }

    let resultado = base ** expo;

    alert(resultado);