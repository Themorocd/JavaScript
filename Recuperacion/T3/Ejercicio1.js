let num; 
do {
    num =prompt("Ingrese un numero entre 1 y 10");
    if(num === "" || isNaN(num) || num < 1 || num > 10){
        alert("Debe ingresar un numero entre 1 y 10");
    }else{
        num = parseInt(num);
        let factorial = 1;
        for (let x = 1; x <= num; x++){
            factorial *= x;
        }
        alert("El factorial de "+num+" es "+factorial);
    }
} while (num === "" || isNaN(num) || num < 1 || num > 10);