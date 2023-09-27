document.write("Convertir pesetas a euros <br>");

let pesetas = prompt("Introduce las pesetas que quieres pasar a euros");

let total = pesetas/166.386;

document.write(pesetas+" son: "+total.toFixed(2)+" euros");
