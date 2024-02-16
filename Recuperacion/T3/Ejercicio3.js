window.onload = function(){


let pares = [];
let impares =[];
let primos = [];

function esprimo(num){
    for(let x = 2; x< num;x++){
        if(num % x ===0){
            return false;
        }
       
    }
    return num > 1;
}
for(let x = 50; x <=100; x++){
    if(x % 2 === 0){
        pares.push(x);
    }else{
        impares.push(x);
    }
    if(esprimo(x)){
        primos.push(x);
    }
}

        document.getElementById('pares').innerHTML = "Los pares son: <br>" + pares.join("<br>");
        document.getElementById('impares').innerHTML = "Los impares son: <br>" + impares.join("<br>");
        document.getElementById('primos').innerHTML = "Los primos son: <br>" + primos.join("<br>");
};