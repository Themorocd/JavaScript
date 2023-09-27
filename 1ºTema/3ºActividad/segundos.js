document.write("CONVERSOR A SEGUNDOS <br>");

var horas = prompt("Introduce las horas");
var minutos = prompt("Introduce los minutos");
var seg =prompt("Introduce los segundos");

    let horasEnSegundos = horas*3600;
    let minutosEnSegundos = minutos*60;
    let totalseg = horasEnSegundos+minutosEnSegundos+parseInt(seg);
   
document.write(horas+" horas <br>");
document.write(minutos+" minutos <br>");
document.write(seg+" seg <br>");
document.write("Suman un total de "+totalseg+" segundos <br>")

