//Teoria isArray, sirve para saber si algo es o no un array
let number = 4;
let numbera = [4];

console.log(Array.isArray(number));//false
console.log(Array.isArray(numbera));//true

//quitar el primer elemento y mostrarlo
let numeros = new Array();
numeros=[1,2,3,4,5];
console.log(numeros);
let elementoeliminado=numeros.shift();
console.log(numeros);
console.log(elementoeliminado)

//quitar el ultimo elemento y mostrarlo
let num = new Array();
num=[1,2,3,4,5];
console.log(num);
let borroelemento=num.pop();
console.log(num);
console.log(borroelemento);


//añadir un elemento al final del array

let num1 = new Array();
num1=[1,2,3,4,5];
console.log(num1);
let agrego=num1.push(6);
console.log(num1);
console.log(agrego);

//añadir un elemento al principio del array

let num2 = new Array();
num2=[1,2,3,4,5];
console.log(num2);
let agreg=num2.unshift(0);
console.log(num2);
console.log(agreg);

//cambiar el contenido de un array, se tiene que poner la posicion donde empieza, el numero de contenido del array que quieres sustituir y el valor 
//por el que se sustituye
//ej: num3.splice(0,2,9,9) el 0 es donde inicia, el 2 el numero de valores que quiero cambiar y el 9,9 el valor nuevo por el que sustituyo los viejos

let num3 = new Array();
num3=[1,2,3,4,5];
console.log(num3);
let cambio=num3.splice(0,2,9,9);
console.log(num3);
console.log(cambio);
cambio = num3.splice(0,3,8,8,8);
console.log(num3);
console.log(cambio);

//splice (a,b,item)
// a - Indice de inicio
// b - Numero de elementos (opcional)
// items -- Elementos a añadir en el caso de que se añadan (opcional)

let numbers=[1,2,3,4,5];
console.log(numbers);
numbers.splice(3); // Elimina desde la posoicioin hasta el final
numbers.splice(2,2); // Elimina desde la posicuon a el numero de valores que le dindicequmos
numbers.splice(2,2,10,23,54); // Si b es un valor distinto de 0, elimina el numero de valores que indicquemos en b y añade los valores de los items a partir de la posicion a 
numbers.splice(4,0,10,23,54); // Si b vale 0 añade los elementos a partir de la posicion a y no elimina ninguno

//indexOf para buscar algo en un array y te devuelve la posicion o -1 sino lo encuentra
//lasIndexOf devuelve el ultimo indice del elemento que coincida con el valor especificado o -1 sino lo encuentra

var letras = new Array();
letras=["a","b","c","d","f"];
console.log(letras);
console.log(letras.indexOf("q"));
console.log(letras.indexOf("c"));
console.log(letras.indexOf("d"));

console.log(letras.lastIndexOf("d"));


//reverse() devuelve un arry al contrario

console.log(letras);
console.log(letras.reverse());


//.join() une todos los elementos de un array y le pone un separador que yo le indique

console.log(letras.reverse());
console.log(letras.join("_"));
console.log(letras.join("-"));
console.log(letras.join("&"));


//concat() une dos o mas array y cualquier valor entre ""

var nombres = new Array();
var nombres2 = new Array();
var nombres3 = new Array();
nombres=["Cecilie","Lone"];
nombres2=["emil","tobias","linus"];
nombres3=["robin","morgan"];
console.log(nombres);
console.log(nombres2);
console.log(nombres3);
console.log(nombres.concat(nombres2,nombres3,"kk"));


//toString() devuelve el array entero

let numeritos = new Array();
numeritos=[1,2,3,4,5];
console.log(numeritos);
console.log(numeritos.toString());

