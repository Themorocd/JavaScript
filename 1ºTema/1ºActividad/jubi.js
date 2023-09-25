let nombre = prompt("Escribe tu nombre");
let edad = prompt("Que edad tienes?");

let diastierra = 360;
let totaltierra = diastierra*edad;
let jubi = 65;
let totierra = diastierra*jubi;
let queda = totierra - totaltierra;

document.write("Tu intencion es jubilarte a los 65 años <br>");
document.write("Te llamas "+nombre+"<br>");
document.write("La tierra ha girado: "+totaltierra+"<br>");
document.write("Por lo tanto de los :"+totierra+" dias de vida que tendras en la jubilacion <br>");
document.write("¡Ya solo te quedan: "+queda+" dias para jubilarte! <br>");