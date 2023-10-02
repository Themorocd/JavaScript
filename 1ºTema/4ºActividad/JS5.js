document.write("OPERACIONES MATEMATICAS <br>");

let num1 = parseInt(prompt("Introduce el primer numero: "));
let num2 = parseInt(prompt("Introduce el segundo numero"));
let num3 = parseInt(prompt("Introduce el tercer numero"));

document.write("Has escodigo el numero: "+num1+"<br>");
document.write("Has escodigo el numero: "+num2+"<br>");
document.write("Has escodigo el numero: "+num3+"<br>");

if(isNaN(num1) || isNaN(num2) || isNaN(num3)){
    alert("No son numeros");
}else{



let media = (num1 + num2 + num3) / 3;
let suma = num1 + num2 + num3;
let resta = num1 - num2 - num3;
let resinver = num3 - num2 - num1;
let multi = num1 * num2 * num3;

document.write("La media de los numeros es: "+media+"<br>")
document.write("La suma de los numeros es: "+suma+"<br>")
document.write("La resta de los numeros es: "+resta+"<br>")
document.write("La resta inversa de los numeros es: "+resinver+"<br>")
document.write("La multiplicacion  de los numeros es: "+multi+"<br>")

}