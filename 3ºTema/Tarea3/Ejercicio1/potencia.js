let base;
let expo;
while (true) {

     base = parseInt(prompt("Introduce una base"));

    if (isNaN(base)) {
        alert("Introduce un numero valido para la base");
    } else {
        break;
    }

}

while (true) {
     expo = parseInt(prompt("Introduce el exponente"));

    if (isNaN(expo)) {
        alert("Introduce un numero valido para el exponente")
    } else {
        break;
    }
}

let resultado = Math.pow(base,expo);

alert(resultado);