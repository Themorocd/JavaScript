
let frase; 
let cuentaletras = {};

while (true) {

    frase = prompt("Introduce un texto");

    if(!isNaN(frase) || !frase.trim()){
        alert("Introduce un texto valido");
    }else{
        break;
    }
    
}
'abcdefghijklmnopqrstuvwxyz'.split('').forEach(letra => cuentaletras[letra] = 0);

for (let x = 0; x<frase.length ; x++){
    let letras = frase.charAt(x);
    if(/[A-Za-z]/.test(letras)){
        cuentaletras[letras]++;
    }
}

let resultado ='';

for(let letras in cuentaletras){

       resultado += letras +": "+cuentaletras[letras]+"<br>"; 

        //alert(letras+":"+cuentaletras[letras]);
    
}

document.getElementById("letritas").innerHTML=resultado;