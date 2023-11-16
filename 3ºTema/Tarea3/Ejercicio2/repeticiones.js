let texto;
let buscotexto;
let repetido =0;

while (true) {
    texto = prompt("Introduzca un texto o palabra");
    if(!isNaN(texto) || !texto.trim()){
        alert("Introduzca solo texto");
    }else{
        break;
    }
    
}

while (true) {

    buscotexto = prompt("Introduzca una palabra a buscar");
    if(!isNaN(buscotexto) || !buscotexto.trim()){
        alert("introduzca solo texto");
    }else{
        break;
    }
    
}

let puesto = texto.indexOf(buscotexto);

while(puesto !== -1){
    repetido++;
    puesto = texto.indexOf(buscotexto,puesto+1);
}

alert("Se repite: "+repetido);